
var app = angular.module('app', []);

app.factory('Cart', function () {
	
	var self = this;

	var productList = [];
	var summ = {
		One : 0,
		All : 0,
		DiscountAll: 0,
		Discount: 0
	};

	self.discount = 33;

	self.addProduct = function(item) {
		if(!item.name || !item.price) {
			return false;
		}
		item.summ = item.count*item.price;
		item.summ = item.summ.toFixed(2);
		productList.push(item);
		
	};
	self.calculateSumm = function() {
		summ.One = 0;
		summ.All = 0;
		summ.DiscountAll = 0;
		summ.Discount = 0;
		angular.forEach(productList, function(item, key) {
			summ.One += item.price;
			summ.All += (item.price * item.count);
			summ.DiscountAll += item.discountPrice;
			summ.Discount += item.discount;
		});
		for(var key in summ) {
			summ[key] = summ[key].toFixed(2);
		}
	};
	self.removeProduct = function(index) {
		productList.splice(index,1);
	};

	self.updateProductsDiscount = function() {
		if(productList.length == 0) {
			return false;
		}
		var discountSumm = 0;
		var itemId;
		var prices = productList.map(function(item){
			return Number(item.summ)
		});
		var summ = prices.reduce(function(prevVal,curVal) {
			return prevVal + curVal;
		});
		var maxPrice = Math.max.apply(Math,prices);

		angular.forEach(productList, function(item, key) {
			var itemPercent = 100 / summ * item.summ;
			var itemDiscount = Math.floor(self.discount / 100 * itemPercent);
			item.discountPrice = item.summ - itemDiscount < 0 ? 0 : item.summ - itemDiscount;
			item.discount = itemDiscount;

			discountSumm+= itemDiscount;

			if(maxPrice==item.summ) {
				itemId = key;
			}
		});
		var lastDiscountVal = productList[itemId].discountPrice - (self.discount-discountSumm);
		productList[itemId].discountPrice = lastDiscountVal > 0 ? lastDiscountVal : 0;
		productList[itemId].discount = productList[itemId].summ - productList[itemId].discountPrice
	};

	self.setDiscount = function(val) {
		self.discount = val;
	};
	self.getDiscount = function() {
		return self.discount;
	};
	self.getProductCount = function(val) {
		return productList.length;
	};
	self.getProductList = function() {
		return productList;
	};
	self.getSumm = function() {
		return summ;
	};

	return this;
});

app.controller('CartHeader', function ($scope,Cart) {
	
	$scope.submit = function() {
		if(!$scope.form) {
			alert('Не все поля заполнены')
			return false;
		}
		var item = {
			name:$scope.form.name ? $scope.form.name : false,
			price:$scope.form.price ? $scope.form.price : false,
			count:$scope.form.count ? $scope.form.count : 1,
		};
		Cart.addProduct(item);
		$scope.form =null;
	};
});

app.controller('CartContent', function ($scope,Cart) {
	$scope.productArr = Cart.getProductList();
	$scope.resultSumm = Cart.getSumm();

	Cart.addProduct({name:'Ноубук HP ProBook',price:1530,count:1});
	Cart.addProduct({name:'Холодильник BOSH',price:234.44,count:1});
	Cart.addProduct({name:'Пылесос Philips',price:748.2,count:3});

	$scope.$watchCollection(Cart.getProductCount, function() {
        Cart.updateProductsDiscount();
        Cart.calculateSumm();
        
    });

	$scope.remove = function(index) {
		Cart.removeProduct(index);
	};
});

app.controller('CartFooter', function ($scope,Cart) {
	$scope.submit = function() {
		if(!$scope.form) {
			alert('Поле не заполнено');
			return false;
		}
		var discount = $scope.form.discount;

		Cart.setDiscount(discount);
		Cart.updateProductsDiscount();
		Cart.calculateSumm();
	};
});

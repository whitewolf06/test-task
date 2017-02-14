
var app = angular.module('app', []);

app.factory('Cart', function () {
	
	var self = this;

	var productList = [];

	self.discount = 0;

	self.addProduct = function(item) {
		if(!item.name || !item.price) {
			return false;
		}
		productList.push(item);
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
			return Number(item.price)
		});
		var summ = prices.reduce(function(prevVal,curVal) {
			return prevVal + curVal;
		});
		var maxPrice = Math.max.apply(Math,prices);

		angular.forEach(productList, function(item, key) {
			var itemPercent = 100 / summ * item.price;
			var itemDiscount = Math.floor(self.discount / 100 * itemPercent);

			item.discountPrice = item.price - itemDiscount < 0 ? 0 : item.price - itemDiscount;
			discountSumm+= itemDiscount;

			if(maxPrice==item.price) {
				itemId = key;
			}
		});
		var lastDiscountVal = productList[itemId].discountPrice - (self.discount-discountSumm);
		productList[itemId].discountPrice = lastDiscountVal > 0 ? lastDiscountVal : 0;
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
			price:$scope.form.price ? $scope.form.price : false
		};
		Cart.addProduct(item);
		$scope.form =null;
	};
});

app.controller('CartContent', function ($scope,Cart) {
	$scope.productArr = Cart.getProductList();

	Cart.addProduct({name:'Ноубук HP ProBook',price:25600});
	Cart.addProduct({name:'Холодильник BOSH',price:15700});
	Cart.addProduct({name:'Пылесос Philips',price:12200});

	$scope.$watchCollection(Cart.getProductCount, function() {
        Cart.updateProductsDiscount();
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
	};
});

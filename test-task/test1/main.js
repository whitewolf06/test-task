
var app = angular.module('app', []);

app.factory('Cart', function () {
	
	var self = this;

	var productList = [];
	var summ = {
		One : 0,
		All : 0,
		DiscountAll: 0,
		Discount: 0,
		result: 0
	};

	self.discount = 131.57;

	self.addProduct = function(item) {
		var newItem = {
			name: item.name || 'defaultName', // Название товара
			count: item.count || 1, // Количество
			basePrice: item.basePrice || 100, // Базовая цена на позицию 
			discountPrice : item.basePrice || 100, // Цена со скидкой на позицию 
			resultPrice: item.basePrice || 100,
			baseSumm: 0, // Базовая сумма позиции
			discountSumm : 0, // Базовая сумма позиции 
			discountPosition: 0 // Общая скидка на позицию
		};
		newItem.baseSumm = Number( (item.count*item.basePrice).toFixed(2) ),
		newItem.discountSumm = newItem.baseSumm;
		productList.push(newItem);
	};
	self.calculateSumm = function() {
		summ.One = 0;
		summ.All = 0;
		summ.DiscountAll = 0;
		summ.Discount = 0;
		angular.forEach(productList, function(item, key) {
			summ.One += item.basePrice;
			summ.All += (item.basePrice * item.count);
			summ.DiscountAll += item.discountSumm;
			summ.Discount += item.discountPosition;
		});
		for(var key in summ) {
			summ[key] = Number( summ[key].toFixed(2) );
		}
		summ.result = Number( (summ.DiscountAll + summ.Discount ).toFixed(2) );
	};
	self.removeProduct = function(index) {
		productList.splice(index,1);
	};

	var itemCalculete = function(item) {
		item.discountPrice = item.discountPosition;

		if(item.count > 1) {
			item.discountPrice = Number( (item.discountPosition / item.count).toFixed(2) );
		}
		item.resultPrice = Number( (item.basePrice - item.discountPrice).toFixed(2) ); 
		item.discountSumm = Number( (item.resultPrice * item.count).toFixed(2) );
		return item;
	};
	var resultCalculate = function(item,excess) {
		if(item.count > 1) {

		} else {
			if(excess > 0) {
				// item.discountSumm -= excess;
			} else {
				// item.discountPosition = Number( (item.discountPosition - excess).toFixed(2) );
				// item.discountPrice = item.discountPosition;
				// item.discountSumm -= excess;
				// item.discountPrice += excess;
			}
			// console.log(item.discountPosition,item.discountPrice,item.resultPrice)
			// item.discountPosition = Number(item.discountPosition.toFixed(2));
			// console.log(item.discountPosition,item.discountPrice,item.resultPrice)
			// item = itemCalculete(item);
		}
			console.log(excess)
		return item;
	}
	self.updateProductsDiscount = function() {

		if(productList.length == 0) {
			return false;
		}
		var discountSumm = 0;
		var itemId;
		var prices = productList.map(function(item){
			return Number(item.baseSumm)
		});
		var summ = prices.reduce(function(prevVal,curVal) {
			return prevVal + curVal;
		});
		var maxPrice = Math.max.apply(Math,prices);
		angular.forEach(productList, function(item, key) {

			var itemPercent = 100 / summ * item.baseSumm;

			item.discountPosition = Number( (self.discount / 100 * itemPercent).toFixed(2) );
			item = itemCalculete(item);
			
			discountSumm += item.discountPosition;

			if(maxPrice==item.baseSumm) {
				itemId = key;
			}
			// console.log(item);
		});

		var checkDiscount = Number( (self.discount-discountSumm).toFixed(2) );
		console.log(checkDiscount)
		if(checkDiscount != 0) {
			productList[itemId] = resultCalculate(productList[itemId],checkDiscount)
		}

		// var lastDiscountVal = productList[itemId].discountPrice - (self.discount-discountSumm);
		// if(lastDiscountVal > 0) {
		// 	productList[itemId].discountPrice =  lastDiscountVal.toFixed(2)-0;
		// 	productList[itemId].discount = productList[itemId].summ - productList[itemId].discountPrice
		// } else {
		// 	productList[itemId].discountPrice = 0;
		// 	productList[itemId].discount += 1; 
		// }
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
	// console.log(Cart.getDiscount())

	Cart.addProduct({name:'Ноубук 1',basePrice:1000,count:1});
	Cart.addProduct({name:'Ноубук 2',basePrice:100,count:1});
	Cart.addProduct({name:'Ноубук 3',basePrice:100,count:3});

	$scope.$watchCollection(Cart.getProductCount, function() {
        Cart.updateProductsDiscount();
        Cart.calculateSumm();
        
    });

	$scope.remove = function(index) {
		Cart.removeProduct(index);
	};
});

app.controller('CartFooter', function ($scope,Cart) {
	$scope.form = {};
	$scope.form.discount = Cart.getDiscount();
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

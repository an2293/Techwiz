debugger
const app = angular.module("myApp", ["ngRoute"])        

app.controller('ProductController', async ($scope, $http) => {    
	debugger
	$scope.products = []
	$scope.categories = []
	$scope.productCategories = []

	let responseProducts = await fetch(urlProducts)
	let dataProducts = await responseProducts.json()
	$scope.products = dataProducts?.products //easy

	let responseCategories = await fetch(urlCategories)
	let dataCategories = await responseCategories.json()
	$scope.categories = dataCategories?.categories

	for(let eachProduct of $scope.products) {
		let {id, name, price, origin, src, categoryId} = eachProduct
		debugger
		let selectedCategory = $scope.categories?.filter(eachCategory => eachCategory.categoryId == categoryId)[0]
		$scope.productCategories.push({id, name, price, origin, src, categoryId, 
			categoryName: selectedCategory.categoryName
		})
	}
	debugger
	$scope.$apply()

})	
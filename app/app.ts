module app{
    var main = angular.module("productManagement",
                    ["common.services",
                     "productResourceMock",
                     "ngRoute"]);
                     
    main.config(routeConfig);
    
    function routeConfig($routeProvider: ng.route.IRouteProvider): void{
        routeConfig.$inject = ["$routeProvider"];
        
        $routeProvider
            .when("/productList",
            {
                templateUrl: "app/products/productListView.html",
                controller: "ProductListCtrl as vm"
            })
            .when("/productDetail/:productId", 
            {
                templateUrl: "app/products/productDetailView.html",
                controller: "ProductDetailCtrl as vm"
            })
            .otherwise("/productList");
    }   
} 
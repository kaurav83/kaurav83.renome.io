var myApp = angular.module("myApp", ["ui.router", "calendarApp", "demo"]);
	myApp.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/")

		$stateProvider
			.state('breakfast', {
				url: "/breakfast",
				templateUrl: "partials/breakfast.html"
			})
				.state('breakfast.backed', {
					url: "/backed",
					templateUrl: "partials/breakfast.backed.html",
					controller: function($scope) {
						$scope.back = [];
					}
				})

				.state('breakfast.pasta', {
					url: "/pasta",
					templateUrl: "partials/breakfast.pasta.html",
					controller: function($scope) {
						$scope.pasta = [];
					}
				})

			.state('lunch', {
				url: "/lunch",
				templateUrl: "partials/lunch.html"
			})
				.state('lunch.appetizers', {
					url: "/appetizers",
					templateUrl: "partials/lunch.appetizers.html"
				})
				.state('lunch.entrees', {
					url: "/entrees",
					templateUrl: "partials/lunch.entrees.html",
					controller: function($scope){
						$scope.entre = [];
					}
				})

				.state('lunch.main_course', {
					url: "/main_course",
					templateUrl: "partials/lunch.main_course.html",
					controller: function($scope){
						$scope.main_corse = [];
					}
				})

				.state('lunch.salads', {
					url: "/salads",
					templateUrl: "partials/lunch.salads.html",
					controller: function($scope){
						$scope.salad = [];
					}
				})

			.state('drinks', {
				url: "/drinks",
				templateUrl: "partials/drinks.html"
			})

				.state('drinks.alcohol', {
					url: "/alcohol",
					templateUrl: "partials/drinks.alcohol.html",
					controller: function($scope) {
						$scope.alcohol = [];
					}
				})

				.state('drinks.cocktails', {
					url: "/cocktails",
					templateUrl: "partials/drinks.cocktails.html",
					conroller: function($scope) {
						$scope.cocktail = [];
					}
				})

				.state('drinks.low_alcohol', {
					url: "/low_alcohol",
					templateUrl: "partials/drinks.low_alcohol.html",
					controller: function($scope) {
						$scope.low_alc = [];
					} 
				})

				.state('drinks.coffee', {
					url: "/coffee",
					templateUrl: "partials/drinks.coffee.html",
					conroller: function($scope) {
						$scope.coffe = [];
					}
				})

				.state('drinks.juices', {
					url: "/juices",
					templateUrl: "partials/drinks.juices.html",
					controller: function($scope) {
						$scope.juice = [];
					}
				})

				.state('drinks.wine', {
					url: "/wine",
					templateUrl: "partials/drinks.wine.html",
					controller: function($scope) {
						$scope.wine = [];
					}
				})
			
			.state('desserts', {
        		url: "/desserts",
        		templateUrl: "partials/desserts.html"
        	})
        		
        		.state('desserts.lunch', {
        			url: "/lunch",
        			templateUrl: "partials/desserts.lunch.html"
        		})

        		.state('desserts.dn', {
        			url: "/dn",
        			templateUrl: "partials/desserts.dn.html"
        		})
});

myApp.controller('DishesCtrl', function ($scope, $http){
	    $http.get('JSON/appetizers.json').success(function(data) {
			$scope.dishes = data;
	});
});

myApp.controller('LunchCtrl', function ($scope, $http){
	    $http.get('JSON/entrees.json').success(function(data) {
			$scope.dishes = data;
	});
});

myApp.controller('Main_courseCtrl', function ($scope, $http){
	    $http.get('JSON/main_course.json').success(function(data) {
			$scope.dishes = data;
	});
});

myApp.controller('SaladsCtrl', function ($scope, $http){
	    $http.get('JSON/salads.json').success(function(data) {
			$scope.dishes = data;
	});
});

myApp.controller('Light_snackCtrl', function ($scope, $http){
	    $http.get('JSON/light_snack.json').success(function(data) {
			$scope.dishes = data;
	});
});

myApp.controller('PastaCtrl', function ($scope, $http){
	    $http.get('JSON/pasta.json').success(function(data) {
			$scope.dishes = data;
	});
});

myApp.controller('AlcoholCtrl', function ($scope, $http){
	    $http.get('JSON/alcohol.json').success(function(data) {
			$scope.dishes = data;
	}); 
});

myApp.controller('CocktailCtrl', function ($scope, $http){
	    $http.get('JSON/cocktails.json').success(function(data) {
			$scope.dishes = data;
	}); 
});

myApp.controller('BeerCtrl', function ($scope, $http){
	    $http.get('JSON/beer.json').success(function(data) {
			$scope.dishes = data;
	});
});  

myApp.controller('CoffeCtrl', function ($scope, $http){
	    $http.get('JSON/coffe.json').success(function(data) {
			$scope.dishes = data;
	});
});

myApp.controller('JuiceCtrl', function ($scope, $http){
	    $http.get('JSON/juices.json').success(function(data) {
			$scope.dishes = data;
	});
});

myApp.controller('WineCtrl', function ($scope, $http){
	    $http.get('JSON/wine.json').success(function(data) {
			$scope.dishes = data;
	});
});

myApp.controller('DesdCtrl', function ($scope, $http){
	    $http.get('JSON/dessertdinner.json').success(function(data) {
			$scope.dishes = data;
	});
});

myApp.controller('DeslCtrl', function ($scope, $http){
	    $http.get('JSON/dessertlunch.json').success(function(data) {
			$scope.dishes = data;
	});
});

/* Calendar */
angular.module("calendarApp", ['ADM-dateTimePicker'])
	.config(['ADMdtpProvider', function(ADMdtp) {
    ADMdtp.setOptions({
        calType: 'gregorian',
        format: 'YYYY/MM/DD hh:mm',
        default: 'today'
    });
}]);

/* Slider lunch */
(function () {
    angular
        .module('demo', [
            'ngSanitize',
            'angular-carousel-3d'
        ])
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$log'];

    function AppController($scope, $log) {
        var vm = this;


        // ANY HTML
        //===================================
        vm.slides2 = [
            {'src': 'url(img/bottom_sidebar/bot_sl1.jpg)', caption: 'Homemade gaguette', day: "Mondey"},
            {'src': 'url(img/bottom_sidebar/bot_sl2.jpg)', caption: 'Dumplings with salad', day: "Tuesday"},
            {'src': 'url(img/bottom_sidebar/bot_sl3.jpg)', caption: 'Apple pie', day: "Wednesday"},
            {'src': 'url(img/bottom_sidebar/bot_sl4.jpg)', caption: 'Meat with stewed cabbage', day: " Thursday "}
        ];

        vm.options2 = {
            visible: 3,
            perspective: 30,
            startSlide: 0,
            border: 0,
            dir: 'ltr',
            width: 500,
            height: 330,
            space: 220,
            controls: true
        };

        vm.removeSlide = removeSlide;
        vm.addSlide = addSlide;
        vm.selectedClick = selectedClick;
        vm.slideChanged = slideChanged;
        vm.beforeChange = beforeChange;
        vm.lastSlide = lastSlide;


        function lastSlide(index) {
            $log.log('Last Slide Selected callback triggered. \n == Slide index is: ' + index + ' ==');
        }

        function beforeChange(index) {
            $log.log('Before Slide Change callback triggered. \n == Slide index is: ' + index + ' ==');
        }

        function selectedClick(index) {
            $log.log('Selected Slide Clicked callback triggered. \n == Slide index is: ' + index + ' ==');
        }

        function slideChanged(index) {
            $log.log('Slide Changed callback triggered. \n == Slide index is: ' + index + ' ==');
        }


        function addSlide(slide, array) {
            array.push(slide);
        }

        function removeSlide(index, array) {
            array.splice(array.indexOf(array[index]), 1);
        }
    }


})();
	


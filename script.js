var app = angular.module('pPortfolio', []);
app.controller('pControl', function($scope) {
    $scope.menu = ["info","games","media"];
    $scope.menuSelected = $scope.menu[1];

});


app.controller('GamesCtrl', function($scope,$http) {    

    $scope.GameList = [
    				{name:"pabloquest",
    				info:"pabloquest info"},
    				{name:"jsDown",
    				info:"super cool game"},
    				{name:"jsDown2",
    				info:"super cool game2"}
    				];

     $http.get('./data.json')
        .then(function(res){
             $scope.GameList = res.games;                
         });
});



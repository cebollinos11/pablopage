var app = angular.module('pPortfolio', []);
app.controller('pControl', function($scope) {
    $scope.menu = ["info","games","media"];
    $scope.menuSelected = $scope.menu[1];

});


app.controller('GamesCtrl', function($scope,$http) {    
    /*
    $scope.GameList = [
    				{name:"pabloquest",
    				info:"pabloquest info"},
    				{name:"jsDown",
    				info:"super cool game"},
    				{name:"jsDown2",
    				info:"super cool game2"}
    				];
                */
     $http.get('data.json')
        .then(function(res){
             $scope.GameList = res.data[0].games;  

             $scope.getlink = function(game){
                if(game.download == "1") {return "games/"+game.name+"/files/"+game.name+".zip";}                    
                else{return "nodownload";}

             }    

             $scope.getDownloads = function(index){
                return 872-index*329;
             }          
         });
});



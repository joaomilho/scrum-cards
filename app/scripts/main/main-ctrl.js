'use strict';

angular.module('scrumCards')
  .controller('MainCtrl', function ($scope, $famous) {
    var Transitionable = $famous['famous/transitions/Transitionable'];

    $scope.rotateY = new Transitionable(0);

    $scope.gridLayoutOptions = {
      dimensions: [3, 3]
    }

    $scope.cards = [
      {card: .5},
      {card: 1},
      {card: 2},
      {card: 3},
      {card: 5},
      {card: 7},
      {card: 12},
      {card: 20},
      {card: 40}
    ]

    $scope.flip = function(card){
      $scope.rotateY.set(Math.PI, {duration: 1000});
      $scope.currentCard = card.card
    }

    $scope.unflip = function(){
      $scope.rotateY.set(0, {duration: 1000});
    }
  });

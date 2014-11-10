angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope){
  $scope.tasks = [
  {title: 'Collect coints'},
  {title: 'Eat Mushrooms'},
  {title: 'get high enough to grab the flag'},
  {title: 'Find the princess'}
  ];
});

'use strict';

angular.module('vleApp')
  .directive('schemaList', function(Dataset) {
    return {
      templateUrl: 'components/schemalist/schemalist.html',
      restrict: 'E',
      scope: {},
      link: function postLink(scope, element /*, attrs*/) {
        // On drag, copy static value of the dynamically set width to the dragged ghost.
        scope.fieldDragStart = function() {
          var pill = element.find('.field-pill');
          pill.css('width', pill.width() + 'px');
        };
      },
      controller: function($scope) {
        $scope.Dataset = Dataset;
        $scope.typeNames = Dataset.typeNames;
      }
    };
  });
'use strict';
/**
 * Created by xaviertung on 2015/8/20.
 */

angular.module('directives', [])
  .directive('myNav', function() {
    return {
      restrict : 'E',
      templateUrl  : 'views/plugins/navbar.html',
      replace : true,
      //require : '^ngModel',    // 必须是指令的controller
      scope: {
        items : '=items',
        websiteName:'=websiteName'
      },
      controller : function ($scope, $element) {
        $scope.currentItem = {};
        $scope.setCurrentItem = function (item) {
          $scope.currentItem = item;
        }
      },
      //compile: function(tElement, tAttrs, transclude) {
      //  return {
      //    pre: function preLink(scope, iElement, iAttrs, controller) { ... },
      //    post: function postLink(scope, iElement, iAttrs, controller) { ... }
      //  }
      //},
      //
      //link: function(scope, iElement, iAttrs) { ... }
    };
  })

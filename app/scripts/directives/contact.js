'use strict';
/**
 * Created by xaviertung on 2015/8/23.
 */
angular.module('contact', [])
  .directive('contactList', function () {
    return {
      restrict : 'E',
      replace :false,
      scope:{
        name : '='
      },
      controller:function($scope, $element) {
        $scope.myName = "Yue";
      },
      transclude:true,
      templateUrl : 'views/plugins/contact_list.html',
      priority:3

    }
  })
  .directive('contactItem', function () {
    return {
      restrict : 'E',
      require: '?contactList',
      //controller: function($scope, $element) {
      //  console.log("my scope isssssssssssssssssssssss:", $scope);
      //},
      replace: false,
      transclude: true,
      templateUrl:'views/plugins/contact_item.html',
      priority:2,
      link:function($scope, element, attrs, ctrl) {
        element.css('list-style', 'none');
      }
    }
  });

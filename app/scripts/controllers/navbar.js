'use strict';
/**
 * Created by xaviertung on 2015/8/20.
 */
angular.module('betterBettermeApp')
  .controller('NavbarCtrl', ['$scope', function($scope) {
    $scope.websiteName = "Better-better.me";
    $scope.items = [
      {
        'label' : '主页',
        'href'  : '#/'
      },
      {
        'label' : '聊天室',
        'href'  : '#/chatroom'
      },
      {
        'label' : '关于',
        'href'  : '#/about'
      },
      {
        'label' : '联系我们',
        'href'  : '#/'
      }
    ];
  }])

'use strict';

(function () {

  function createAnimationLinker(className, $animate) {
    return function (scope, elem) {
      elem.on('click', function () {
        if (elem.hasClass(className)) {
          $animate.removeClass(elem, className);
          $animate.removeClass(elem, 'infinite');
        } else {
          $animate.addClass(elem, className);
          $animate.addClass(elem, 'infinite');
        }
      });
    }
  }

  angular
    .module('angular-in-a-flash', [
      'ngAnimate'
    ])
    .directive('rainbow', function ($animate) {
      return {
        restrict: 'E',
        replace:true,
        template: '<img src="images/rainbow.png" />',
        link: createAnimationLinker('animate-tada', $animate)
      }
    })
    .directive('unicorn', function ($animate) {
      return {
        restrict: 'E',
        replace:true,
        template: '<img src="images/charlieunicorn.png" />',
        link: createAnimationLinker('animate-wobble', $animate)
      }
    })
    .directive('magic', function ($animate) {
      return {
        restrict: 'E',
        replace:true,
        template: '<img src="images/mtg-card.png" />',
        link: createAnimationLinker('animate-swing', $animate)
      }
    })
    .directive('aLittleMagic', function () {
      return {
        restrict: 'A',
        link: function (scope, elem) {
          elem.addClass('tinker-bell-cursor');
        }
      }
    });
}());
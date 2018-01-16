/**!
 * AngularJS SignaturePad canvas attribute directive.
 * Based on https://docs.angular.org/api/ng/type/ngModel.NgModelController, example at bottom.
 * @author Russell Morley <russell@compass-point.net>
 * @version 0.1.0
 */

/* global angular */

(function () {
  'use strict';

  angular.module('angularSigPad', []).directive(
    'angularSigPad',
    [
      '$window',
      '$timeout',
      '$log',
      function ($window, $timeout, $log) {
          return {
              restrict: 'A', //attribute only - element should be a canvas
              require: '?ngModel', //get NgModelController associated with ng-model attribute on canvas element
              link: function (scope, element, attrs, ngModel) {
                  if (!ngModel) return;  //require ngModel on element associated with this attribute, otherwise there is nothing for this directive to do.
                  
                  var sigPad = new $window.SignaturePad(element[0]); //element should be a canvas

                  //specify how the UI should be updated
                  ngModel.$render = function() { // called when the value referenced by ng-model is changed programmatically and both $modelValue and $viewValue are
                                                 // different from last time.
                      if (ngModel.$viewValue == null) {
                          sigPad.clear();
                      } else {
                          sigPad.fromDataURL(ngModel.$viewValue);
                      }
                  };

                  sigPad.onEnd = function() { // event called when stroke ends. 
                      //$log.debug('IN ONEND');
                      scope.$evalAsync(getDataFromSigPad);
                  };

                  function getDataFromSigPad() { // save contents of sigPad. Called on init and onEnd when a stroke ends.
                     //$log.debug('IN GETDATAFROMSIGPAD');
                      ngModel.$setViewValue(sigPad.toDataURL());
                  }

                  $timeout(function () { // get the other attributes once DOM has finished rendering
                      if (attrs.angularSigPadDotSize) {
                          sigPad.dotSize = attrs.angularSigPadDotSize;
                      }

                      if (attrs.angularSigPadinWidth) {
                          sigPad.minWidth = attrs.angularSigPadMinWidth;
                      }

                      if (attrs.angularSigPadMaxWidth) {
                          sigPad.maxWidth = attrs.angularSigPadMaxWidth;
                      }

                      if (attrs.angularSigPadBackgroundColor) {
                          sigPad.backgroundColor = attrs.angularSigPadBackgroundColor;
                      }

                      if (attrs.angularSigPadPenColor) {
                          sigPad.penColor = attrs.angularSigPadPenColor;
                      }

                      if (attrs.angularSigPadVelocityFilterWeight) {
                          sigPad.velocityFilterWeight = attrs.angularSigPadVelocityFilterWeight;
                      }

                      if (attrs.angularSigPadPadOff) {
                          if (attrs.ngSignaturePadOff === 'true') {
                              sigPad.off();
                          }
                      }

                  }); //$timeout default is 0
              }
          }; //return
      } // function
    ] 
  ); //angular          
})();

(function () {
  angular.module('Items', ['ngRoute', 'firebase']) //Setup our angular module
                                                    // Whenever we use firebase we have to acces the forge
    .constant('FIREBASE_URI', 'https://tiy-wendy.firebaseio.com/');                



}());

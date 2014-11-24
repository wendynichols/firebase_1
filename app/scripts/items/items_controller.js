(function () {

  angular.module('Items')
    .controller('ItemsListController', ['$scope', 'FIREBASE_URI', '$firebase',
     function ($scope, FIREBASE_URI, $firebase) {

       var itemsRef = new Firebase(FIREBASE_URI + 'items');

       $scope.items = $firebase(itemsRef).$asArray();  // $firebase this = firebase service(how I reference it)

        $scope.title = 'List of Items';

        $scope.addItem = function (item) {
          $scope.items.$add(item); //Add this item to array
          $('#addForm')[0].reset(); //reset the form
      };

      $scope.deleteItem = function (item) {
        $scope.items.$remove(item);
      }

    }]);

}());

'use strict';

angular.module('workflowDemoApp')
    .controller('MainCtrl', function ($scope) {
        $scope.newPerson = '';

        $scope.addPerson = function () {
            if ($scope.newPerson !== '') {
                $scope.attendeeList.push({name: $scope.newPerson, present: false});
                $scope.newPerson = '';
            }
        }
        $scope.attendeeList = [];
    });

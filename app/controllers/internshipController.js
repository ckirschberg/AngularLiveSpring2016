angular.module("internship").
    controller("internshipController", function($scope) {
        $scope.internship = {};
        console.log("It works!");

        $scope.saveInternship = function(){
            console.log($scope.internship);

            if ($scope.internshipForm.$valid) {
                alert("Ok, we'll save it to the server");
            }
            else {
                alert("fix the errors first, please.");
            }

        };
    });
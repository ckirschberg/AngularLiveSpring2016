angular.module("internship").
    controller("internshipController",
    function($scope, $state, $http) {

        console.log("It works!");

        $scope.editInternship = function(internshipToCopy) {
          //this should navigate sending the internship to the new state.

            //copy the object for editing
            var internshipToSend = angular.copy(internshipToCopy);

            $state.go("new-internship", //pass internship copy to the state
                { internshipParameter: internshipToSend });
        };

        var today = new Date();

        $http({ method: "GET",
            url: "http://angularkea1.azurewebsites.net/api/internships/GetAll" })
            .success(function(data) {
                console.log(data);
                $scope.dummyInternships = data;


            }).error(function(data) {

            });


    });
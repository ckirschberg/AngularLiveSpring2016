angular.module("internship").
    controller("internshipController", function($scope) {

        console.log("It works!");

        $scope.editInternship = function(internship) {
          //this should navigate sending the internship to the new state.

        };

        var today = new Date();
        $scope.dummyInternships = [
            {initials: "chrk", date: today},
            {initials: "krmm", date: today},
            {initials: "asbc", date: today}
        ];
    });
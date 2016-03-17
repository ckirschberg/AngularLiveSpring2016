angular.module("internship").
    controller("internshipController", function($scope) {

        console.log("It works!");

        var today = new Date();
        $scope.dummyInternships = [
            {initials: "chrk", date: today},
            {initials: "krmm", date: today},
            {initials: "asbc", date: today}
        ];
    });
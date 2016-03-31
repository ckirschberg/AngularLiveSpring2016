angular.module("internship").
    controller("internshipController",
    function($scope, $state) {

        console.log("It works!");

        $scope.editInternship = function(internshipToCopy) {
          //this should navigate sending the internship to the new state.

            //copy the object for editing
            var internshipToSend = angular.copy(internshipToCopy);

            $state.go("new-internship", //pass internship copy to the state
                { internshipParameter: internshipToSend });
        };

        var today = new Date();
        $scope.dummyInternships = [
            {initials: "chrk", date: today},
            {initials: "krmm", date: today},
            {initials: "asbc", date: today}
        ];
    });
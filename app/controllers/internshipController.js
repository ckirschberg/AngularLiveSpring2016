angular.module("internship").
    controller("internshipController", function($scope) {
        $scope.internship = {};
        console.log("It works!");

        var today = new Date();
        $scope.dummyInternships = [
            {initials: "chrk", date: today},
            {initials: "krmm", date: today},
            {initials: "asbc", date: today}
        ];



        $scope.saveInternship = function(){
            console.log($scope.internship);

            if ($scope.internshipForm.$valid) {
                //alert("Ok, we'll save it to the server");

                //Call server, when we know how to do that
                //We will use these later, to call an api.
                //$http
                //$resource

                var fakedResponse = {
                    error: "No! (reason should be added)"
                };
                //save the fake server response to the scope,
                //so the view can access it (used in html file).
                $scope.serverResponse = fakedResponse;
            }
            else {
                alert("fix the errors first, please.");
            }
        };
    });
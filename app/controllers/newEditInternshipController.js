angular.module("internship")
    .controller("newEditInternshipController",
        function($scope, $state, $stateParams, $http) {

    $scope.internship = {};
    console.log("hello from newEditInternshipController!");

    //read the internship from the $stateParams service.
    $scope.internship = $stateParams.internshipParameter;

    $scope.saveInternship = function(){
        if ($scope.internshipForm.$valid) {
            //alert("Ok, we'll save it to the server");

            //Call server, when we know how to do that
            //We will use these later, to call an api.
            //$http
            //$resource

            //if there is a server-side error, we get an error
            //back from the server, eg. like this..
            //var fakedResponse = {
            //    error: "No! (reason should be added)"
            //};

            //save the fake server response to the scope,
            //so the view can access it (used in html file).
            //$scope.serverResponse = fakedResponse;

            //if there is no server side error, we save the data
            //locally and navigate back
            //the server should send back the created object
            //and we should save the newly created id on our local
            //internship, like
            //$scope.internship.id = serverInternship.id;


            //what if it is edited?

            $http({ method: "POST",
                data: $scope.internship,
                url: "http://angularkea1.azurewebsites.net/api/internships/Create" })
                .success(function(data) {
                    //console.log(data);
                    console.log(data);

                    $scope.$parent.dummyInternships.push($scope.internship);
                    $state.go("all-internships");
                }).error(function(data) {

            });


        }
        else {
            //alert("fix the errors first, please.");
        }
    };
});
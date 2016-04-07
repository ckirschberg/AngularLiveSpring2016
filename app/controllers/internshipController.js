angular.module("internship").
    controller("internshipController",
    function($scope, $state, $http, $resource) {

        console.log("It works!");

        $scope.editInternship = function(internshipToCopy) {
          //this should navigate sending the internship to the new state.

            //copy the object for editing
            var internshipToSend = angular.copy(internshipToCopy);

            $state.go("new-internship", //pass internship copy to the state
                { internshipParameter: internshipToSend });
        };

        var today = new Date();

        //configured $resource
        $scope.internshipResource =
            $resource(
                "http://angularkea2.azurewebsites.net/api/internships/:id",
                    { id: "@id" },
                    {
                        update: { method: 'PUT' }
                    }
                );

        //retrieve all internships
        $scope.internshipResource.query(
            function(data) {
                 $scope.dummyInternships = data;
            }, function(data) {
                            //something went wrong....
            });


        //$http({ method: "GET",
        //    url: "http://angularkea1.azurewebsites.net/api/internships/GetAll" })
        //    .success(function(data) {
        //        console.log(data);
        //        $scope.dummyInternships = data;
        //
        //
        //    }).error(function(data) {
        //
        //    });


    });
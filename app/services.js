angular.module("internship")
    .factory("numbersService", function($q) {
       var counter = 0;

        return {
            add: function(number) {
                counter = number + counter;
            },
            get: function() {
                return counter;
            },
            testPromise: function() {
                var deferred = $q.defer();

                //do something that takes a little time.
                if (counter > 2) {
                    //resolve
                    deferred.resolve("data to use");
                }
                else {
                    //reject
                    deferred.reject("Some error");
                }

                return deferred.promise;
            }
        }
    }).factory("internshipApiService", function($q, $http, $resource) {
        //use $http service or $resource to be able
        //to communicate with the webservice.

        var internships = [];

        var internshipResource =
        $resource(
            "http://angularkea2.azurewebsites.net/api/internships/:id",
                { id: "@id" },
                {
                    update: { method: 'PUT' }
                }
            );


    return {
            getInternships: function() {
                var deferred = $q.defer();

                internshipResource.query(function(data)  {
                    internships = data;
                    deferred.resolve(internships);
                }, function(error) {
                    deferred.reject(error);
                });

                return deferred.promise;
            },
            saveInternship: function(internship) {
                var deferred = $q.defer();

                if (internship._id === undefined) {
                    $http({ method: "POST",
                        data: internship,
                        url: "http://angularkea1.azurewebsites.net/api/internships/Create" })
                        .success(function(data) {
                            deferred.resolve(data);
                            internships.push(internship);

                        }).error(function(data) {
                            deferred.reject(data);

                    });
                }
                else {
                    $http({
                        method: "POST",
                        data: internship,
                        url: "http://angularkea1.azurewebsites.net/api/internships/Update/" + $scope.internship._id
                    })
                        .success(function (data) {
                            deferred.resolve(data);
                        }).error(function (data) {
                        deferred.reject(data);
                    });
                }

                return deferred.promise;
            },
            deleteInternship: function(id) {

            }
        }
});








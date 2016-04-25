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
    }).factory("internshipApiService", function($q) {
        //use $http service or $resource to be able
        //to communicate with the webservice.

        var internships = [];

        return {
            getInternships: function() {

            },
            addInternship: function(internship) {

            },
            updateInternship: function(internship) {

            },
            deleteInternship: function(id) {

            }
        }
});








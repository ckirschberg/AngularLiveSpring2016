angular.module("internship")
    .factory("numbersService", function() {
       var counter = 0;

        return {
            add: function(number) {
                counter = number + counter;
            },
            get: function() {
                return counter;
            }
        }
    });
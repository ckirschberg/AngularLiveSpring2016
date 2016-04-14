angular.module("internship")
    .filter("internshipSearch", function() {
        return function(data, search) {
            console.log(data);
            console.log(search);

            

            return data;
        };
});
angular.module("internship")
    .filter("internshipSearch", function() {
        return function(data, search) {
            console.log("data");
            console.log(data);

            //logService.log("data", data);

            console.log(search);

            if (search === undefined) {
                return data;
            }

            return _.filter(data, function(internship) {
                    return internship.initials &&
                        internship.initials.indexOf(search) !== -1 ||
                        internship.date &&
                        internship.date.indexOf(search) !== -1;
            });
        };
});
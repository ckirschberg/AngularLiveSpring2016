angular.module('internship').
    config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/all-internships'); //url

    $stateProvider.state('new-internship', {
        url: '/new-internship', // if user changes url
        templateUrl: 'app/partials/internship-form.html'
    })
        .state('all-internships', {
            url: '/all-internships', //part of the url in browser, #/
            templateUrl: 'app/partials/all-internships.html' //partial view here
        });
});
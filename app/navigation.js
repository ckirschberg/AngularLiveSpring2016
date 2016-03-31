angular.module('internship').
    config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/all-internships'); //url

    $stateProvider.state('new-internship', {
        url: '/new-internship', // if user changes url
        templateUrl: 'app/partials/internship-form.html',
        controller: 'newEditInternshipController',
        params: { internshipParameter: null } //define a internship variable on $stateParams and set default value to null
    })
        .state('all-internships', {
            url: '/all-internships', //part of the url in browser, #/
            templateUrl: 'app/partials/all-internships.html' //partial view here
        })

        //No sub-views
        //.state('new-internship.a', {
        //    url: '/a', // if user changes url
        //    templateUrl: 'myHtmlFileWithAsHtml.html'
        //})
        //.state('new-internship.b', {
        //    url: '/b', // if user changes url
        //    templateUrl: 'myHtmlFileWithBsHtml.html'
        //})
    ;
});
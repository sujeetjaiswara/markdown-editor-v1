var app = angular.module('mdeApp', [
    'ui.router',
	'ngSanitize'
]);

/* PAGE ROUTER */
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');
    $urlRouterProvider.otherwise('/editor');
    $stateProvider
            .state('editor', {
                url: '/editor',
                templateUrl: 'app/templates/markdown.html',
                controller: 'editorController'
            });
});
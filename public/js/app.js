window.app = angular.module('ngFantasyFootball', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ngRoute', 'ngff.controllers', 'ngff.directives', 'ngff.services']);

// bundling dependencies
angular.module('ngff.controllers', ['ngff.controllers.header','ngff.controllers.index', 'ngff.controllers.nfl']);
angular.module('ngff.services', ['ngff.services.global', 'ngff.services.nfl']);

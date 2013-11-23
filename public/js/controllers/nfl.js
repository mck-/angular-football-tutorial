angular.module('ngff.controllers.nfl', [])
  .controller('NFLController', function($routeParams, Global, NFL, $window) {
    checkAuth = function() {
      if(Global.isSignedIn())
        return true;
      else
        $window.location.href = '/signin';
    };

    this.getIndex = function() {
      if(checkAuth())
        return NFL.teams;
    };

    this.getTeam = function(teamID){
      if(checkAuth())
        return NFL.teams.filter(function(team){
          return team.abbr === teamID;
        });
    };
  });

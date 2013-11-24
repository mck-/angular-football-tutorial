angular.module('ngff.controllers.nfl', [])
  .controller('NFLController', function($routeParams, Global, NFL, $window) {
    var that = this;

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

    this.getTeam = function(){
      if(checkAuth()) {
        var nflteam = NFL.teams.filter(function(team){
          return team.abbr === $routeParams.team;
        });
        that.team = nflteam[0];
      }
    };
  });

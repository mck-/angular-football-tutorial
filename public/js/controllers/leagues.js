window.angular.module('ngff.controllers.leagues', [])
  .controller('LeaguesController',
    function ($scope, Global, Leagues) {
      this.Global = Global;

      this.create = function () {
        // Create new league with form data
        var league = new Leagues({
          name: $scope.league.name
        });

        // Save and redirect to league page
        league.$save(function (resp) {
          $location.path('leagues/' + resp._id);
        });

        // Reset league name
        $scope.league.name = '';
      }

      // Find leagues based on query
      this.find = function (query) {
        Leagues.query(query, function (leagues) {
          this.leagues = leagues;
        });
      }

      // Find league based on leagueId
      this.findOne = function () {
        Leagues.get({
          leagueId: $routeParams.leagueId
        },
        function (league) {
          this.league = league;
        });
      }

      // Update league, redirect to league page
      this.update = function () {
        var league = this.league;
        league.$update(function () {
          $location.path('leagues/' + league._id);
        });
      }

      // Remove league from the backend then from the frontend
      this.destory = function (league) {
        // Remove from backend
        league.$destroy();

        var leagues = this.leagues;

        for ( var i in leagues ) {
          if ( leagues[i] === league ) {
            // Remove from frontend
            leagues.splice(i, 1);
          }
        }
      }
    });

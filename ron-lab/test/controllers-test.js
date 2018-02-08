'use strict';

require('../app/entry.js');
require('angular-mocks');

let angular = require('angular');

describe('GamePadController', function() {
  beforeEach(function() {
    angular.mock.module('ngAdventure');
    angular.mock.inject(($controller) => {
      this.gamePadCtrl = new $controller('GamePadController')
    });
  });

  describe('should have directions array ', function() {
    it('should have an array of directions that are: = [north, south, east, west]', function() {
      console.log(this.gamePadCtrl);
      expect(this.gamePadCtrl.directions).toEqual(['north', 'south', 'east', 'west']);
    });
  });
});

describe('GameHistoryController', function() {
  beforeEach(function() {
    angular.mock.module('ngAdventure');
    angular.mock.inject(($controller) => {
      this.gameHistoryCtrl = new $controller('GameHistoryController')
    });
  });

  describe('testing history', function() {
    it('should have player history', function() {
      console.log(this.gameHistoryCtrl);
      expect(this.gameHistoryCtrl.history).toEqual([{ turn: 0, desc: 'West of The Rockies', location: 'Washington', hp: 100 }]);
    });
  });
});

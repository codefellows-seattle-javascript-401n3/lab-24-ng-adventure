'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.component('playerInfo', {
  template: require('./player-info.html'),
  controller: 'PlayerInfoController',
  controllerAs: 'playerInfoController'
});

ngAdventure.controller('PlayerInfoController', ['$log', 'playerService', PlayerInfoController]);
function PlayerInfoController($log, playerService) {


    $log.debug('PlayerInfoController init');
    console.log(this);
    this.player = playerService.player;
    this.currentRoom = playerService.currentRoom;
    this.weapon = playerService.player.currentRoom.weapon;
    this.room = playerService.player.location;
    this.message = playerService.player.currentRoom.message;

}

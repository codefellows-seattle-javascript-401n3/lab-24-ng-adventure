'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.component('gamePad',{
  template: require('./game-pad.html'),
  controller: 'GamePadController',
  controllerAs: 'gamepadCtrl'
});

ngAdventure.controller('GamePadController', ['$log', 'playerService', GamePadController]); //what do i associate here?

function GamePadController($log, playerService){

    $log.debug('GamePadController stuff');
    console.log(this);
    this.currentRoom = playerService.player.currentRoom;
    this.room = playerService.player.currentRoom.pic;
    this.movePlayer = playerService.movePlayer;
    this.player = playerService.player;
    this.useWeapon = playerService.useWeapon;
}

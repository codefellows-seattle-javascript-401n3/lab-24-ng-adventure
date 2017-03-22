'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('playerService', ['$q','$log', 'mapService', playerService]);

function playerService($q, $log, mapService){
  $log.debug('init playerService');

  let service = {};
  service.counter = 0;
  console.log(service.counter);
  service.player = {
    name: 'Jr',
    hp: Infinity,
    currentRoom: mapService.mapData[service.counter],
    location: mapService.mapData[service.counter].roomName,
    weapon: mapService.mapData[service.counter].weapon,
    pic: mapService.mapData[service.counter].pic,
    // attackPower: this.weapon.length ? this.weapon.length * 1.1 : Math.random(0, 1)
  };
  //

  service.movePlayer = function() {
    // return new $q((resolve, reject) => {
    console.log(this.player, 'player');
    service.counter ++;
      if(service.counter >= 0){
        this.player.weapon = mapService.mapData[service.counter].weapon;
        this.player.currentRoom = mapService.mapData[service.counter];
        this.player.location = mapService.mapData[service.counter].roomName;
        this.player.pic = mapService.mapData[service.counter].pic;
      }

      // this.player.currentRoom = this.player.location;

      // let newLocation = mapService.mapData[counter];
      // let oldLocation = mapService.mapData[counter - 1].room;


      // if(newLocation){
      //   return resolve(mapService.mapData[newLocation].pic );
      // } else {
      //   return reject();
      // };
          //still have to display new pic to show that player has either moved backwards or forwards
      // });
  };

  // service.history = [
  //   {
  //     room: mapService.mapData[this.player.location],
  //     playerHp: this.player.hp,
  //     description: 'Fight off the Scotts!'//this will be updated on playerMove - give starting values
  //   }
  // ];
  //
  // let scottCurrentHp = mapService.mapData[this.player.location].scottHp;
  //
  // service.movePlayer = function(){
  //   if(scottCurrentHp <= 0) {
  //     this.player.weapon.push(mapService.mapData[this.player.location].weapon);
  //     this.player.location = mapService.mapData[this.player.location].nextRoom;
  //   }//if scott was killed, push weapon into player.weapon and move into next room
  // };
  //
  // service.useWeapon = function(){
  //   if(scottCurrentHp > 0) {
  //     scottCurrentHp - this.player.attackPower;
  //     return //some message to playerHistory component property about killing scott
  //   }
  // }
  return service;
};

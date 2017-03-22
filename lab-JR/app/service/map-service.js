'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log){
  $log.debug('init mapService');
  //setup service
  let service = {};
  //add features to service
  //should i make this an array of objects so i can get the indices/room names easier?

  service.mapData = [
    {
      roomName: 'CodeFellows Hall Room 1: Scooter\'s Room of Horrors',
      pic: require('../pics/scottGame_1.jpg'),
      message: 'you happen upon a young Scott, he bares his teeth. Prepare to fight!',
      weapon: '101 tutorial sword of idiocy',
      nextRoom: 'scott_two',
      scottHp: 1
    },
    {
      roomName: 'CodeFellows Hall Room 2: Scott grows a ferocious beard',
      pic: require('../pics/scottGame_2.jpg'),
      message: 'how can you not want to hit that face? just go for it.',
      weapon: 'ring of infinite loops',
      nextRoom: 'scott_three',
      scottHp: 2
    },
    {
      roomName: 'CodeFellows Hall Room 3: Scoot Taunts the World',
      pic: require('../pics/scottGame_3.jpg'),
      message: 'You see a level three Scott of Taunting. Sneak up on him while he\'s still smug!',
      weapon: 'Master Branch of Confusion and Conflict',
      nextRoom: 'scott_four',
      scottHp: 3
    },
    {
      roomName: 'CodeFellows Hall Room 4: Scott lingers at the kegerator waiting for his next class of students',
      pic: require('../pics/scottGame_4.jpg'),
      message: 'Here we have a Scott of College Fratness. Get him before he does another keg stand!',
      weapon: 'Sunglasses of Shadowed Scope',
      nextRoom: 'scott_five',
      scottHp: 4
    },
    {
      roomName: 'CodeFellows Hall Room 5: Scooter goes to Egypt',
      pic: require('../pics/scottGame_5.jpg'),
      message: 'You see a Scott of cultural appropriation. He\'s almost at full power...throw sand in his eyes and go for the face!',
      weapon: 'Magic dust of Sandbox Environment',
      nextRoom: 'scott_six',
      scottHp: 5
    },
    {
      roomName: 'FINAL BOSS: Scott v6 aka MasterBranch',
      pic: require('../pics/scottGame_6.jpg'),
      message: 'Humpty Scotty sat on a wall. Humpty Scotty had a great fall.',
      weapon: 'Scott\'s 401 sword of broken souls',
      nextRoom: 'job_room',
      scottHp: 10
    },
    {
      message: 'Congrats on beating all the Scotts. You have a job starting at $' + Math.random(1, 71000)
    }
  ];
  return service;
}

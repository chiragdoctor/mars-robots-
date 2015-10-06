'use strict';
var Position = require("./position.js");

function Robot(grid) {
    var position = new Position();
    var turnLeftPosition = { "N":"W", "W":"S", "S":"E", "E":"N" };
    var turnRightPosition = { "N":"E", "E":"S", "S":"W", "W":"N" };

    this.setOriginLocation = function (originLocation) {
        originLocation = originLocation.split(" ");
        position.xAxis = originLocation[0];
        position.yAxis = originLocation[1];
        position.orientation = originLocation[2];

    };

    this.getRobotStats = function(){
        return position;
    }

    this.move = function (instructions) {
        for (var i = 0; i < instructions.length; i++) {

            if (this.isLost()) {
                break;
            }
            var instruction = instructions.charAt(i);

            if (instruction == "L") {
                this.turnLeft();
            }

            if (instruction == "R") {
                this.turnRight();
            }

            if (instruction == "F") {
                this.moveForward();
            }

        }
        return position.toString();
    };

    this.turnLeft = function () {
        position.orientation = turnLeftPosition[position.orientation];
    };

    this.turnRight = function () {
        position.orientation = turnRightPosition[position.orientation];
    };

    this.moveForward = function (){
        var currentLocation =  position.toString();
        if(this.isLost() || grid.hasAnyEdgeSpots(currentLocation)){
            return;
        }

        if (position.orientation == "N")
            position.yAxis++;
        if (position.orientation == "E")
            position.xAxis++;
        if (position.orientation == "S")
            position.yAxis--;
        if (position.orientation == "W")
            position.xAxis--;

        if (position.isOffThe(grid))
            grid.addEdgeSpot(currentLocation);
    }

    this.isLost = function () {
        return position.isLost;
    }
}

module.exports = Robot;

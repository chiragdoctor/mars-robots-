'use strict';

function Grid(xAxis, yAxis){

    var edgeSpots = [];

    if(xAxis > 50 || yAxis > 50){
        throw new Error('Grid size cannot be greater then 50X50');
    }
    else if(xAxis < 1 || yAxis < 1){
        throw new Error('Grid size cannot be less then 1X1');
    }

    this.xAxis = xAxis === undefined ? 0 : xAxis;
    this.yAxis = yAxis === undefined ? 0 : yAxis;

    this.addEdgeSpot = function(position){
        edgeSpots.push(position);
    }

    this.hasAnyEdgeSpots = function(position){
        return edgeSpots.indexOf(position) > -1;
    }
}


module.exports = Grid;

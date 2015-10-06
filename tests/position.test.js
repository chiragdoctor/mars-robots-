'use strict';

var Position = require('../game/position');
var Grid = require('../game/grid');
var expect = require('chai').expect;

describe('Given a grid of 3x3 and X & Y coordinates', function(){
    var grid = new Grid(3, 3);
    it('should return a string with provided input 1 1 N', function(){
        var position = new Position();
        position.xAxis = 1;
        position.yAxis = 1;
        position.isLost =false;
        position.orientation = "N";
        expect(position.toString()).to.equal('1 1 N');
    });

    it('should return a string with provided input 3 4 N LOST', function(){
        var position = new Position();
        position.xAxis = 3;
        position.yAxis = 4;
        position.isLost =true;
        position.orientation = "N";
        expect(position.toString()).to.equal('3 4 N LOST');
    });

    // Robot already off grid

    it('should be lost if the position of robot is 4,3', function(){
        var position = new Position();
        position.xAxis = 4;
        position.yAxis = 3;

        var result = position.isOffThe(grid);
        expect(result).to.be.true;
        expect(position.isLost).to.be.true;
    });

    it('should be lost if the position of robot is -1,1', function(){
        var position = new Position();
        position.xAxis = -1;
        position.yAxis = 1;

        var result = position.isOffThe(grid);
        expect(result).to.be.true;
        expect(position.isLost).to.be.true;
    });


    it('should be lost if the position of robot is 1,-1', function(){
        var position = new Position();
        position.xAxis = 1;
        position.yAxis = -1;

        var result = position.isOffThe(grid);
        expect(result).to.be.true;
        expect(position.isLost).to.be.true;
    });


    it('should be lost if the position of robot is 1,4', function(){
        var position = new Position();
        position.xAxis = 1;
        position.yAxis = 4;

        var result = position.isOffThe(grid);
        expect(result).to.be.true;
        expect(position.isLost).to.be.true;
    });

    // Not lost scenarios

    it('should be not lost if the position of robot is 2,2 irrespective of orientation', function(){
        var position = new Position();
        position.xAxis = 2;
        position.yAxis = 2;

        var result = position.isOffThe(grid);
        expect(result).to.be.false;
        expect(position.isLost).to.be.false;
    });

    // assert if co-ordinates are getting set correctly when user gets lost with particular orientation.

    it('should set (x,y) to (1,3) when robot has gone off the grid facing North and wants to travel (1,4)', function(){
       var position = new Position();
        position.xAxis = 1;
        position.yAxis = 4;
        position.orientation = "N";

        position.isOffThe(grid);
        expect(position.yAxis).to.equal(3);
        expect(position.xAxis).to.equal(1);
    });

    it('should set (x,y) to (0,0) when robot has gone off the grid facing West wants to travel (-1,0)', function(){
        var position = new Position();
        position.xAxis = -1;
        position.yAxis = 0;
        position.orientation = "W";

        position.isOffThe(grid);
        expect(position.xAxis).to.equal(0);
        expect(position.yAxis).to.equal(0);
    });

    it('should set (x,y) to (2,0) when robot has gone off the grid facing South wants to travel (2,0)', function(){
        var position = new Position();
        position.xAxis = 2;
        position.yAxis = 0;
        position.orientation = "S";

        position.isOffThe(grid);
        expect(position.xAxis).to.equal(2);
        expect(position.yAxis).to.equal(0);
    });

    it('should set (x,y) to (4,2) when robot has gone off the grid facing East wants to travel (0,2)', function(){
        var position = new Position();
        position.xAxis = 4;
        position.yAxis = 2;
        position.orientation = "E";

        position.isOffThe(grid);
        expect(position.xAxis).to.equal(3);
        expect(position.yAxis).to.equal(2);
    });

});

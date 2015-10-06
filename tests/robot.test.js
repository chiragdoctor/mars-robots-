'use strict';

var Robot = require('../game/robot');
var Grid = require('../game/grid');
var expect = require('chai').expect;

describe('When a new Robot is created', function () {
    var grid = new Grid(1, 1);
    var robot = new Robot(grid);

    it('should return robot location and orientation', function(){
        var result = robot.getRobotStats();

        expect(result.xAxis).to.equal(0);
        expect(result.yAxis).to.equal(0);
        expect(result.orientation).to.equal("N");
        expect(result.isLost).to.be.false;
        expect(result.isOffThe(grid)).to.be.false;

    });

    // expecting movements of the robot to be correct.

    it('can turn left to face West', function(){
        var stats = robot.getRobotStats();
        robot.turnLeft();
        expect(stats.orientation).to.equal("W");
    });

    it('again if robot turns left then it will be facing South', function(){
        var stats = robot.getRobotStats();
        robot.turnLeft();
        expect(stats.orientation).to.equal("S");
    });

    it('again if robot turns left then it will be facing East', function(){
        var stats = robot.getRobotStats();
        robot.turnLeft();
        expect(stats.orientation).to.equal("E");
    });

    it('again if robot turns left then it will be facing North to its original position', function(){
        var stats = robot.getRobotStats();
        robot.turnLeft();
        expect(stats.orientation).to.equal("N");
    });

    it('robot turns right then it will be facing East', function(){
        var stats = robot.getRobotStats();
        robot.turnRight();
        expect(stats.orientation).to.equal("E");
    });

    it('again if robot turns right then it will be facing South', function(){
        var stats = robot.getRobotStats();
        robot.turnRight();
        expect(stats.orientation).to.equal("S");
    });

    it('again if robot turns right then it will be facing West', function(){
        var stats = robot.getRobotStats();
        robot.turnRight();
        expect(stats.orientation).to.equal("W");
    });

    it('again if robot turns right then it will be facing North', function(){
        var stats = robot.getRobotStats();
        robot.turnRight();
        expect(stats.orientation).to.equal("N");
    });

    it('robot moves forward facing North', function(){
        robot.moveForward();
        var stats = robot.getRobotStats();
        expect(stats.toString()).to.equal("0 1 N");
    });

    it('robot moves forward facing East', function(){
        robot.turnRight();
        robot.moveForward();
        var stats = robot.getRobotStats();
        expect(stats.toString()).to.equal("1 1 E");
    });

    it('robot moves forward facing South', function(){
        robot.turnRight();
        robot.moveForward();
        var stats = robot.getRobotStats();
        expect(stats.toString()).to.equal("1 0 S");
    });

    it('robot moves forward facing West', function(){
        robot.turnRight();
        robot.moveForward();
        var stats = robot.getRobotStats();
        expect(stats.toString()).to.equal("0 0 W");
    });
});

describe('Multiple instructions provided to robot', function(){

    it('should parse multiple instructions and provide output', function(){
        var grid = new Grid(4,4)
        var robot1 = new Robot(grid);
        robot1.setOriginLocation("1 1 E")
        var position = robot1.move("RFRFRFRF");
        expect(position.toString()).to.equal("1 1 E");
    });
});

describe('Provided a grid of 1x1 with 2 robots on mars', function(){
    var grid = new Grid();
    var robot1 = new Robot(grid);
    var robot2 = new Robot(grid);

    it("when robot 1 falls of the grid it is lost", function () {
        robot1.moveForward();
        robot1.moveForward();

        var positionOutput = robot1.getRobotStats().toString();
        expect(robot1.isLost()).to.be.true;
        expect(positionOutput).to.equal("0 0 N LOST");
    });

    it("when robot 2 tries get lost in the same place it is not lost", function () {
        robot2.moveForward();
        robot2.moveForward();

        var positionOutput = robot2.getRobotStats().toString();
        expect(robot2.isLost()).to.be.false;
    });
    it("and it cannot move forwards in that direction", function () {
        robot2.moveForward();

        var positionOutput = robot2.getRobotStats().toString();
        expect(positionOutput).to.equal("0 0 N");
    });
})



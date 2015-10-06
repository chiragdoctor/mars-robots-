'use strict';

var Grid = require('./grid');
var Robot = require('./robot');
var sample_input =  "5 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL";
var game = new Game();
console.log(game.start(sample_input));

function Game() {
    this.start = function (instructions) {

        if(instructions.length > 100){
            throw new Error('Instructions cannot be more than 100 characters in length');

        }
        var output = "";
        instructions = instructions.split('\n');
        var gridAxis = instructions.splice(0, 1);
        gridAxis = gridAxis[0].split(" ");
        var grid = new Grid(gridAxis[0], gridAxis[1]);
        var robot = new Robot(grid);

        for (var i = 0; i < instructions.length; i++) {
            var instruction = instructions[i];

            if (isNewRobot(instruction)) {
                robot = new Robot(grid);
            }
            else if (isRobotOriginLocation(instruction)) {
                robot.setOriginLocation(instruction)
            }
            else{
                output += (output.length > 0 ? "\n" : "") + robot.move(instruction);
            }

        }
        return output;
    };

    var isNewRobot = function (instruction) {
        return instruction == "";
    };

    var isRobotOriginLocation = function (instruction) {
        return instruction.indexOf(" ") > -1;
    }
}

module.exports = Game;

'use strict';

var Game = require('../game/game');
var expect = require('chai').expect;

describe('When earth sends some instructions to Mars', function(){

    it('should throw an error if length of instrtuctions is more that 100', function(){
        var sample_input =  "5 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL";
        expect(function(){ new Game().start(sample_input) }).throw(Error, 'Instructions cannot be more than 100 characters in length');
    });

    it('should provide result as expected', function(){
        var sample_input =  "5 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL";
        var game = new Game();
        var result = game.start(sample_input);
        expect(result).to.equal("1 1 E\n3 3 N LOST\n2 3 S");
    });

});



'use strict';

var Grid = require('../game/grid');
var expect = require('chai').expect;


describe('Provided a Grid', function(){
    var error_msg_max = 'Grid size cannot be greater then 50X50';
    var error_msg_min = 'Grid size cannot be less then 1X1';

    it('with x = 51 and y = 50 should throw an error', function(){
        expect(function(){ new Grid(51,50)}).throw(Error, error_msg_max);
    });

    it('with x = 50 and y = 51 should throw an error', function(){
        expect(function(){ new Grid(50,51)}).throw(Error, error_msg_max);
    });

    it('with x = 0 and y = 2 should throw an error', function(){
        expect(function(){ new Grid(0,2)}).throw(Error, error_msg_min);
    });

    it('with x = 10 and y = 0 should throw an error', function(){
        expect(function(){ new Grid(10,0)}).throw(Error, error_msg_min);
    });

});


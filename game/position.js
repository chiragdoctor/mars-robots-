'use strict';


function Position() {
    this.xAxis = 0;
    this.yAxis = 0;
    this.orientation = 'N';
    this.isLost = false;

    this.toString = function () {
        return this.xAxis + " " + this.yAxis + " " + this.orientation + (this.isLost ? " LOST" : "");
    };

    // Check if current position is off grid limits.
    this.isOffThe = function (grid) {
        if (this.xAxis > grid.xAxis
            || this.yAxis > grid.yAxis
            || this.yAxis < 0
            || this.xAxis < 0) {

            if (this.orientation == "S")
                this.yAxis = 0;
            if (this.orientation == "W")
                this.xAxis = 0;
            if (this.orientation == "N")
                this.yAxis = grid.yAxis;
            if (this.orientation == "E")
                this.xAxis = grid.xAxis;

            this.isLost = true;
            return this.isLost;
        }
        return false;
    };

}


module.exports = Position;
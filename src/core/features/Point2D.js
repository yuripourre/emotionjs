/*
 * Point2D class, based on br.com.etyllica.linear.Point2D class
 */


var Point2D = function(x, y) {

  this.x = x;

  this.y = y;

};

Point2D.prototype.getX = function() {
    return this.x;
};

Point2D.prototype.getY = function() {
    return this.y;
};


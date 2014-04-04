/*
 * Component class, based on br.com.etyllica.motion.core.features.Component class
 */

var Component = function() {

  this.points = [];

  this.lowestX = Number.MAX_VALUE;
  
  this.lowestY = Number.MAX_VALUE;

  this.highestX = 0;

  this.highestY = 0;

};

Component.prototype.getLowestX = function() {
  return this.lowestX;
};

Component.prototype.getLowestY = function() {
  return this.lowestY;
};

Component.prototype.getHighestX = function() {
  return this.highestX;
};

Component.prototype.getHighestY = function() {
  return this.highestY;
};

Component.prototype.add(x, y) {
  points.push(new Point2D(x,y));
};


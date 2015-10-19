var Table = function(size) {
  if (!(this instanceof Table)) {
    return new Table();
  }

  // Default size to 5 x 5 square
  if (size === undefined) {
    size = 5;
  }

  this.size = size;
  this.validDirections = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
};

Table.prototype = {
  toString: function() {
    return 'Table';
  },

  isValidDirection: function(direction) {
    return this.validDirections.indexOf(direction) !== -1;
  },

  isValidXY: function(value) {
    return (0 <= value && value < this.size);
  },

  isValidPosition: function(x, y, f) {
    x = this._sanitizeXY(x);
    y = this._sanitizeXY(y);
    f = this._sanitizeF(f);

    if(x === false || y === false || f === false) {
      return false;
    }
    return (this.isValidXY(x) && this.isValidXY(y) && this.isValidDirection(f));
  },

  _sanitizeXY: function(value) {
    if (typeof(value) !== 'number') {
      return false;
    }
    return Math.round(value);
  },

  _sanitizeF: function(value) {
    if (typeof(value) !== 'string') {
      return false;
    }
    return value.toUpperCase();
  }
};

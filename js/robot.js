var Robot = function(table) {
  if (!(this instanceof Robot)) {
    return new Robot();
  }

  this._x = null;
  this._y = null;
  this._f = null;
  this._placed = false;
  this._table = table;
};

Robot.prototype = {
  toString: function() {
    return 'Mr. Robot';
  },

  place: function(x, y, f) {
    if (!this._table.isValidPosition(x, y, f)) {
      return false;
    }
    this._x = x;
    this._y = y;
    this._f = f;
    this._placed = true;
    return true;
  },

  move: function() {
    if(!this._moveIfValid()) {
      return;
    }

    switch (this._f) {
      case 'NORTH':
        if (this._table.isValidXY(this._y + 1)) {
          this._y++;
        }
        break;
      case 'EAST':
        if (this._table.isValidXY(this._x + 1)) {
          this._x++;
        }
        break;
      case 'SOUTH':
        if (this._table.isValidXY(this._y - 1)) {
          this._y--;
        }
        break;
      case 'WEST':
        if (this._table.isValidXY(this._x - 1)) {
          this._x--;
        }
        break;
      default:
        return;
    }
  },

  left: function() {
    this._turn('left');
  },

  right: function() {
    this._turn('right');
  },

  report: function() {
    if(!this._moveIfValid()) {
      return false;
    }

    return {
      x: this._x,
      y: this._y,
      f: this._f
    };
  },

  _turn: function(direction) {
    if(!this._moveIfValid()) {
      return;
    }

    var r;
    if(direction === 'left') {
      r = -1;
    } else if(direction === 'right') {
      r = 1;
    }

    var index = this._table.validDirections.indexOf(this._f) + r;
    if(index >= this._table.validDirections.length) {
      index = 0;
    } else if(index < 0) {
      index = this._table.validDirections.length - 1;
    }
    this._f = this._table.validDirections[index];
  },

  _moveIfValid: function() {
    return this._placed;
  }
};

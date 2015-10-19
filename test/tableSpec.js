describe('Table', function() {
  var bot = {};
  var botTable = {};

  beforeEach(function() {
    botTable = new Table(5);
    bot      = new Robot(botTable);
  })

  describe('#isValidPosition()', function() {
    it('should be true given valid position values', function() {
      expect(botTable.isValidPosition(0, 0, 'EAST')).to.be.true;
    });

    it('should be false given invalid position values', function() {
      expect(botTable.isValidPosition(0, 0, 'invalid')).to.be.false;
      expect(botTable.isValidPosition('a', 0, 'EAST')).to.be.false;
      expect(botTable.isValidPosition(0, 'b', 'WEST')).to.be.false;
    });
  });

  describe('#isValidDirection()', function() {
    it('should be true given valid direction value', function() {
      expect(botTable.isValidDirection('nOrth')).to.be.false;
      expect(botTable.isValidDirection('south')).to.be.false;
      expect(botTable.isValidDirection('A')).to.be.false;
      expect(botTable.isValidDirection('EAST')).to.be.true;
    });

    it('should be false given invalid direction value', function() {
      expect(botTable.isValidPosition('invalid')).to.be.false;
    });
  });

  describe('#isValidXY()', function() {
    it('should be true given valid X and Y values', function() {
      expect(botTable.isValidXY(0)).to.be.true;
    });

    it('should be false given invalid X and Y values', function() {
      expect(botTable.isValidXY('a')).to.be.false;
      expect(botTable.isValidXY(6)).to.be.false;
    });
  });

  describe('#_sanitizeXY()', function() {
    it('should return an integer with a given number', function() {
      expect(botTable._sanitizeXY(1)).to.equal(1);
      expect(botTable._sanitizeXY(3.5)).to.equal(4);
    });

    it('should return false given an invalid number', function() {
      expect(botTable._sanitizeXY('a')).to.be.false;
      expect(botTable._sanitizeXY([])).to.be.false;
      expect(botTable._sanitizeXY({})).to.be.false;
    });
  });

  describe('#_sanitizeF()', function() {
    it('should return a valid direction with a given value', function() {
      expect(botTable._sanitizeF('west')).to.equal('WEST');
      expect(botTable._sanitizeF('NORTH')).to.equal('NORTH');
      expect(botTable._sanitizeF('a')).to.equal('A');
    });

    it('should return false given an invalid direction', function() {
      expect(botTable._sanitizeF([])).to.be.false;
      expect(botTable._sanitizeF({})).to.be.false;
    });
  });
});


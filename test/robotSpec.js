describe('Robot', function() {
  var bot = {};
  var botTable = {};

  beforeEach(function() {
    botTable = new Table(5);
    bot      = new Robot(botTable);
  })

  describe('#place()', function() {
    it('places our robot if given a valid command', function() {
      expect(bot.place(1, 1, 'south')).to.be.true;
      expect(bot.place(4, 4, 'EAST')).to.be.true;
      expect(bot.place(0, 0, 'NORTH')).to.be.true;
    });

    it('places our robot if given an invalid command', function() {
      expect(bot.place(2, 'b', 'NORTH')).to.be.false;
      expect(bot.place('a', 2, 'EAST')).to.be.false;
      expect(bot.place(2, 2, 'NEWS')).to.be.false;
    });
  });

  describe('#left()', function() {
    describe('if our robot is already placed', function() {
      it('should turn to the direction', function() {
        bot.place(0, 0, 'NORTH');
        bot.left();
        expect(bot.report().f).to.equal('WEST');

        bot.place(0, 0, 'SOUTH');
        bot.left();
        expect(bot.report().f).to.equal('EAST');

        bot.place(0, 0, 'EAST');
        bot.left();
        expect(bot.report().f).to.equal('NORTH');

        bot.place(0, 0, 'WEST');
        bot.left();
        expect(bot.report().f).to.equal('SOUTH');
      });
    });

    describe('if our robot is not yet placed', function() {
      it('should turn to the direction', function() {
        bot.left();
        expect(bot.report()).to.be.false;
      });
    });
  });

  describe('#right()', function() {
    describe('if our robot is already placed', function() {
      it('should turn to the direction', function() {
        bot.place(0, 0, 'NORTH');
        bot.right();
        expect(bot.report().f).to.equal('EAST');

        bot.place(0, 0, 'SOUTH');
        bot.right();
        expect(bot.report().f).to.equal('WEST');

        bot.place(0, 0, 'EAST');
        bot.right();
        expect(bot.report().f).to.equal('SOUTH');

        bot.place(0, 0, 'WEST');
        bot.right();
        expect(bot.report().f).to.equal('NORTH');
      });
    });

    describe('if our robot is not yet placed', function() {
      it('should turn to the direction', function() {
        bot.right();
        expect(bot.report()).to.be.false;
      });
    });
  });

  describe('#move()', function() {
    describe('if our robot is already placed', function() {
      describe('and the move is valid', function() {
        beforeEach(function() {
          bot.place(0, 0, 'NORTH');
          bot.move();
        });

        it('should move our robot', function() {
          expect(bot.report().x).to.equal(0);
          expect(bot.report().y).to.equal(1);
        });
      });

      describe('and the move is invalid', function() {
        it('should not move our robot if collide with top edge of the table', function() {
          bot.place(0, 4, 'NORTH');
          bot.move();
          expect(bot.report().x).to.equal(0);
          expect(bot.report().y).to.equal(4);
        });

        it('should not move our robot if collide with right edge of the table', function() {
          bot.place(4, 1, 'EAST');
          bot.move();
          expect(bot.report().x).to.equal(4);
          expect(bot.report().y).to.equal(1);
        });

        it('should not move our robot if collide with bottom edge of the table', function() {
          bot.place(3, 0, 'SOUTH');
          bot.move();
          expect(bot.report().x).to.equal(3);
          expect(bot.report().y).to.equal(0);
        });


        it('should not move our robot if collide with left edge of the table', function() {
          bot.place(0, 3, 'WEST');
          bot.move();
          expect(bot.report().x).to.equal(0);
          expect(bot.report().y).to.equal(3);
        });

      });
    });

    describe('if our robot is not yet placed', function() {
      beforeEach(function() {
        bot.move();
      });

      it('should not move our robot', function() {
        expect(bot.report()).to.be.false;
      });
    });
  });

  describe('#report()', function() {
    describe('if our robot is already placed', function() {
      it('should report correct position', function() {
        bot.place(0, 0, 'NORTH');
        expect(bot.report()).to.eql({ x: 0, y: 0, f: 'NORTH' });
      });
    });

    describe('if our robot is not yet placed', function() {
      it('should not report correct position', function() {
        expect(bot.report()).to.be.false;
      });
    });
  });

  describe('robot movement and reporting', function() {
    describe('it should move and report position correctly', function() {
      it('1st example', function() {
        bot.place(0, 0, 'NORTH');
        bot.move();
        expect(bot.report()).to.eql({ x: 0, y: 1, f: 'NORTH' });
      });

      it('2nd example', function() {
        bot.place(0, 0, 'NORTH');
        bot.left();
        expect(bot.report()).to.eql({ x: 0, y: 0, f: 'WEST' });
      });

      it('3rd example', function() {
        bot.place(1, 2, 'EAST');
        bot.move();
        bot.move();
        bot.left();
        bot.move();
        expect(bot.report()).to.eql({ x: 3, y: 3, f: 'NORTH' });
      });
    });
  });
});


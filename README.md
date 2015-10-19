# Toy Robot Simulator

### To get started
* Open ```index.html``` and open your browser's developer console

* Create a new Table with an optional size argument:

```javascript
  var tableSpace = new Table();
```

* Create a new Robot and place it on our table:

```javascript
  var bot = new Robot(tableSpace);
```

Put these functions in the dev console to issue commands to our robot:

```javascript
  bot.place(0, 0, 'NORTH');
  bot.move();
  bot.left();
  bot.right();
  bot.report(); // Returns a Javascript object with 'x', 'y' and 'f' values
```

### Tests with MochaJS
Simply open ```test/index.html``` to run specs

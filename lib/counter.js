//addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript
var Counter = function() {
  var count = 0;
  function constructor() { };
  constructor.prototype.increment = function() {
    //adds one to the counter
    return count++;
  };
  constructor.prototype.getValue = function() {
    //returns current count
    console.log("count is now " + count);
    return count;
  };
  return new constructor();
}

var counter = new Counter();
counter.increment();
counter.getValue();
counter.increment();
counter.getValue();


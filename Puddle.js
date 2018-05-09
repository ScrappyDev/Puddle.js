var Puddle = {}

var testComplete = null

/**
 * Throw an error if test is falsey
 * @param {bool} test 
 */
function assert(test) {
  if (!test) throw new Error("Assertion Failed");
}

function Test() {
  assert(Puddle.identity(0) === 0);
  assert(Puddle.identity("hello") === "hello");
  const obj = {x: 1};
  assert(Puddle.identity(obj) === obj);
  console.log("Test Complete")
  testComplete = true
}

/**
 * Puddle.identity(x)
 * Unary identity function. Returns the first parameter
 * @param {any} x
 * @returns x
 */
{
  // Get funtion that always returns `this` value
  const thisId = Object.getPrototypeOf([][Symbol.iterator]())[Symbol.iterator];
  // Convert function to return first parameter instead
  Puddle.identity = thisId.call.bind(thisId);
  console.log(Puddle.identity);
}

/**
 * Support CommonJS and browser environments
 */
{
  if (typeof window != "undefined") {
    window.Puddle = Puddle;
  }
  if (typeof module != "undefined") {
    module.exports = Puddle;
  }
}

Test();
console.log(testComplete)
Test();

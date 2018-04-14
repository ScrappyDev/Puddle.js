var Puddle = {}

var testComplete = null

function Test() {
  console.log("Test Complete")
  testComplete = true
}
Test();
console.log(testComplete)
Test();

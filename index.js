function hasTargetSum(array, target) {
  // Write your algorithm here
  const seen = {};
  for (let i = 0; i < array.length; i++) {
    if (seen[target - array[i]]) {
      return true;
    } else {
      seen[array[i]] = true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
    We iterate through the array once, performing a constant-time operation for each element. 
  Therefore, the time complexity of this algorithm is O(n).
*/

/* 
  Add your pseudocode here
   Create an empty object to store seen numbers
   Iterate through each number in the array
   Check if the difference between the target and the current number has been seen before
   Otherwise, add the current number to the seen object

*/

/*
  Add written explanation of your solution here
  The algorithm works by using an object called seen to keep track of numbers that we've seen so far. For each number in the array, we check if the difference between the target and the current number has been seen before. If it has, we know that we've found two numbers that add up to the target, so we return true. Otherwise, we add the current number to the seen object and continue iterating. If we reach the end of the loop without finding two numbers that add up to the target, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
console.log("")
console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
console.log("")
console.log("=>", hasTargetSum([2, 2, 3, 3], 4))
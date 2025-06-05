// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?
function majorityElementHash(nums: number[]): number {
  let majorityCount = 0;
  let resultNumber = nums[0];
  const map: Map<number, number> = new Map();

  for (const element of nums) {
    const currentValue = map.get(element);
    if (currentValue) {
      map.set(element, currentValue + 1);
      if (majorityCount < currentValue) {
        majorityCount = currentValue;
        resultNumber = element;
      }
    } else {
      map.set(element, 1);
    }
  }
  console.log("map.entries(): ", map.entries());

  return resultNumber;
}

function majorityElement(nums: number[]): number {
  let count = 0;
  let candidate: number | null = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate as number;
}

const nums = [6, 5, 5];
const k = majorityElement(nums);
console.log("k: ", k);

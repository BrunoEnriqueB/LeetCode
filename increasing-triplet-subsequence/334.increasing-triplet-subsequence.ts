/*
 * @lc app=leetcode id=334 lang=typescript
 *
 * [334] Increasing Triplet Subsequence
 *
 * https://leetcode.com/problems/increasing-triplet-subsequence/description/
 *
 * algorithms
 * Medium (42.51%)
 * Likes:    6898
 * Dislikes: 323
 * Total Accepted:    415K
 * Total Submissions: 989.8K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Given an integer array nums, return true if there exists a triple of indices
 * (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such
 * indices exists, return false.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,3,4,5]
 * Output: true
 * Explanation: Any triplet where i < j < k is valid.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [5,4,3,2,1]
 * Output: false
 * Explanation: No triplet exists.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [2,1,5,0,4,6]
 * Output: true
 * Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4]
 * == 4 < nums[5] == 6.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 5 * 10^5
 * -2^31 <= nums[i] <= 2^31 - 1
 *
 *
 *
 * Follow up: Could you implement a solution that runs in O(n) time complexity
 * and O(1) space complexity?
 */

// @lc code=start
function increasingTriplet(nums: number[]): boolean {
	let array: number[] = [];

	for (let i = 0; i < nums.length; i++) {
		array.push(nums.shift() as number);

		let actualValues = [...nums];
		for (let j = 0; j < nums.length; j++) {
			const min = Math.min(...actualValues);

			actualValues = actualValues.slice(
				nums.indexOf(min),
				actualValues.length - 1
			);

			if (array[array.length - 1] < min) array.push(min);
		}

		if (array.length > 2) return true;
		array = [];
	}

	return false;
}
// @lc code=end

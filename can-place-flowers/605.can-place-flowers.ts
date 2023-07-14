/*
 * @lc app=leetcode id=605 lang=typescript
 *
 * [605] Can Place Flowers
 *
 * https://leetcode.com/problems/can-place-flowers/description/
 *
 * algorithms
 * Easy (32.37%)
 * Likes:    5260
 * Dislikes: 888
 * Total Accepted:    470.2K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,0,0,0,1]\n1'
 *
 * You have a long flowerbed in which some of the plots are planted, and some
 * are not. However, flowers cannot be planted in adjacent plots.
 *
 * Given an integer array flowerbed containing 0's and 1's, where 0 means empty
 * and 1 means not empty, and an integer n, return true if n new flowers can be
 * planted in the flowerbed without violating the no-adjacent-flowers rule and
 * false otherwise.
 *
 *
 * Example 1:
 * Input: flowerbed = [1,0,0,0,1], n = 1
 * Output: true
 * Example 2:
 * Input: flowerbed = [1,0,0,0,1], n = 2
 * Output: false
 *
 *
 * Constraints:
 *
 *
 * 1 <= flowerbed.length <= 2 * 10^4
 * flowerbed[i] is 0 or 1.
 * There are no two adjacent flowers in flowerbed.
 * 0 <= n <= flowerbed.length
 *
 *
 */

// @lc code=start
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
	let validPlaces = 0;
	flowerbed.forEach((v, i, a) => {
		if (v !== 1 && a[i - 1] !== 1 && a[i + 1] !== 1) {
			validPlaces++;
			a[i] = 1;
		}
	});

	return n <= validPlaces;
}
// @lc code=end

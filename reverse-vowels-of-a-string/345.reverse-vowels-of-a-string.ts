/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 *
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (50.37%)
 * Likes:    3645
 * Dislikes: 2525
 * Total Accepted:    546.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '"hello"'
 *
 * Given a string s, reverse only all the vowels in the string and return it.
 *
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both
 * lower and upper cases, more than once.
 *
 *
 * Example 1:
 * Input: s = "hello"
 * Output: "holle"
 * Example 2:
 * Input: s = "leetcode"
 * Output: "leotcede"
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 3 * 10^5
 * s consist of printable ASCII characters.
 *
 *
 */

// @lc code=start
function reverseVowels(s: string): string {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let vowelsInString: string[] = [];
	for (let i = 0; i < s.length; i++) {
		if (vowels.includes(s[i].toLowerCase())) {
			vowelsInString.push(s[i]);
			s = s.substring(0, i) + '/' + s.substring(i + 1);
		}
	}

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '/') {
			s = s.substring(0, i) + vowelsInString.pop() + s.substring(i + 1);
		}
	}

	return s;
}
// @lc code=end

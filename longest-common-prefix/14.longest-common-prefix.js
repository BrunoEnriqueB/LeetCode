/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];
  let substring = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const actual = strs[i];

    while (true) {
      if (substring.length === 0) return '';
      const minLength = Math.min(actual.length, substring.length);
      if (actual.slice(0, minLength) === substring.slice(0, minLength)) {
        substring = actual.slice(0, minLength);
        break;
      }
      substring = substring.slice(0, substring.length - 1);
    }
  }

  return substring;
};
// @lc code=end

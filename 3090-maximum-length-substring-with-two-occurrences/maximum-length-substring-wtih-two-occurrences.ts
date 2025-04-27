/*
 * @lc app=leetcode id=3090 lang=typescript
 *
 * [3090] Maximum Length Substring With Two Occurrences
 */

// @lc code=start
function maximumLengthSubstring(s: string): number {
  const occurrences = new Map<string, number>();
  let left = 0,
    right = 0;
  let max = 1;

  while (right < s.length) {
    while ((occurrences.get(s[right]) || 0) >= 2) {
      occurrences.set(s[left], (occurrences.get(s[left]) || 0) - 1);
      left++;
    }

    occurrences.set(s[right], (occurrences.get(s[right]) || 0) + 1);
    max = Math.max(max, right - left + 1);
    right++;
  }

  return max;
}
// @lc code=end

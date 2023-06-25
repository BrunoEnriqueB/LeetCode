/*
 * @lc app=leetcode id=9 lang=c
 *
 * [9] Palindrome Number
 */

// @lc code=start
bool isPalindrome(int x){
  if(x < 0 || x != 0 && x % 10 == 0) return false;
  int check = 0;
  while(x > check) {
    check = check * 10 + x % 10;
    x /= 10;
  }

  return x == check || x == check/10;
}
// @lc code=end

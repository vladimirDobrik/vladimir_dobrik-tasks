module.exports = isPalindrome = (str) => {

  return String(str) === String(str).split('').reduceRight((acc, cur) => acc + cur, '') ?
        true : false;
  
}
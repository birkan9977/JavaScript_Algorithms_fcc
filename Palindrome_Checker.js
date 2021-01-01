function palindrome(str) {
  let newstr = str.slice()
  let regex=/\W|_/g

  let match = newstr.match(regex)
  console.log(match)
  newstr = newstr.replace(regex,'').toLowerCase()

  console.log(newstr)
  let reverse = newstr.split('').reverse().join('')
  console.log(reverse)
  return newstr===reverse;
}



let res = palindrome("race CAR");
console.log(res)
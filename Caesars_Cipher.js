function rot13(str) {
  let arr = str.split('')
  let regex = /\W/g
  
  let newstr = arr.map(letter=>{
    let newLetter=''
    if(!regex.test(letter)){
      console.log(letter,typeof letter)
      let charCode = letter.charCodeAt(0)
      console.log(charCode)
      let newCharCode = charCode - 13
      if (newCharCode<65)newCharCode+=26
      newLetter = String.fromCharCode(newCharCode)
      console.log(newCharCode,newLetter)
    } else {
      newLetter=letter
    }
    return newLetter
  })
  console.log(newstr)
  
    return newstr.join("");
  }
  
  let res=rot13("SERR PBQR PNZC");
  console.log(res)
  
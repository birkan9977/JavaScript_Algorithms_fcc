function telephoneCheck(str) {

  let regex = /^1?\s?((\(\d{3}\))|(\d{3})|(\s\d{3}\s))(\s|-)?(\d{3})(\s|-)?(\d{4})$/
  
  let chk = regex.test(str)
  console.log(chk)
  
  
  
    return chk;
  }
  
  telephoneCheck("1455555555");
  
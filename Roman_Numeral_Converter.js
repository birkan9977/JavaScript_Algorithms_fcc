function convertToRoman(num) {
  let roman = {
    '1': 'I',
    '5':'V',
    '10':'X',
    '50':'L',
    '100':'C',
    '500':'D',
    '1000':'M'
  }
  
  //convert to string
  let strNum = String(num)
  let arrNum = strNum.split('').reverse()
  //console.log(arrNum)
  
  let numMap = arrNum.map((num)=>{
    return Number(num)
  })
  
  //numMap = numMap.reverse()
  //console.log(numMap)
  
  const convert=(num,index)=>{
  // k=> 1 | 10 | 100 | 1000 ...so on
  let k = Math.pow(10,index)
  console.log(num,k)
  
  let char = ''
      if(num<4){
        for(let i=0;i<num;i++){
  
          char+=roman['1'*k]
        }
      }else if(num===4){
        char=roman['1'*k]+roman['5'*k]
      }else if(num===5){
        char=roman['5'*k]
      }else if(num>5 && num<9){
        char=roman['5'*k]
        for(let i=0;i<num-5;i++){
          char+=roman['1'*k]
        }
      }else if(num===9){
        char=roman['1'*k] + roman['10'*k]
      }
      return char
  }
  /*
  let x = convert(3,2)
  console.log(x)
  */
  let charArr = numMap.map((num,index)=>{
      return convert(num,index)
  })
  
  //console.log(charArr)
  
  let fin = charArr.reverse().join('')
  console.log(fin)
  
   return fin;
  }
  
  convertToRoman(68);
  
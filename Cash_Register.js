function checkCashRegister(price, cash, cid) {
  var change = (cash - price).toFixed(2)
  //console.log(change)

let unitsTable = {
  'PENNY':0.01,
  'NICKEL':0.05,
  'DIME':0.1,
  'QUARTER':0.25,
  'ONE':1,
  'FIVE':5,
  'TEN':10,
  'TWENTY':20,
  'ONE HUNDRED':100
}

let use = []
for(var key in unitsTable){
  //console.log(key)
  if(change>unitsTable[key]){
    //console.log(key)
    use.unshift(key)
  }
}
//console.log(usables)
//convert to array of objects
let newCid = cid.map((key)=>{
  return key.reduce((acc,item,index,arr)=>{
       acc = {
         ...acc,
         [arr[0]]:arr[1]
         }
         return acc    
  },{})
})
let changeCid=[]
newCid = Object.assign(...newCid)
//console.log(newCid)
console.log(change)
//console.log(use)
let finCid = Object.assign({},newCid)
for (let i=0;i<use.length;i++){
if(newCid[use[i]] && newCid[use[i]]!==0 && change>0){
  console.log(unitsTable[use[i]],newCid[use[i]])
  if(newCid[use[i]]>=change){
    let division = Math.floor(change/unitsTable[use[i]])
    let extract = division * unitsTable[use[i]]
    console.log('extract',extract)
    finCid[use[i]] = finCid[use[i]]-extract
    change = (change - extract).toFixed(2)
    console.log('greater','change:',change)
    if(extract>0)changeCid.push([use[i],extract])
    console.log(changeCid)
  }
  if(newCid[use[i]]<change){
    change = (change-newCid[use[i]]).toFixed(2)
    finCid[use[i]]= 0
    console.log('smaller','change:',change)
    changeCid.push([use[i],newCid[use[i]]])
    console.log(changeCid)
  }
}
}

console.log('fin',finCid)
let returnObj= {}
console.log(change)
if (change>0){
  returnObj = {
    status:"INSUFFICIENT_FUNDS",
    change:[]
  }
}else if(change==0){
  console.log('change=0')
  let chk = Object.values(finCid).every(e=>e==0)
  if(chk){
    returnObj = {
    status:"CLOSED",
    change:cid
    }
  }else{
    returnObj = {
    status:"OPEN",
    change:changeCid
    }
  }
}


console.log(returnObj)
  return returnObj;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

const fs = require("fs")


let getCounts = (type) => {

  let data = fs.readFileSync('./data/test.ssv', "utf-8")

  let rawArray = data.split("\n")
  let objArray = []

  for(let i=0; i<rawArray.length; i++){
    let rowArray = rawArray[i].split(" ")

    let obj = {
      stage: rowArray[0],
      event: rowArray[1],
      error: rowArray[2],
      time: rowArray[3]
    }
    objArray.push(obj)
  }

  let existingIds = []
  var tempItem;

  for(let i=0; i<objArray.length; i++){

    let row = objArray[i]
    if(existingIds.find(function(val) { tempItem = val; return val.type === row[type] })){
      tempItem.count = tempItem.count + 1
    }
    else{
      existingIds.push({type: row[type], count: 1})
    }
  }

  return existingIds;
};


console.log(getCounts("stage"))
// processing time
console.time('time elapsed');
getCounts("stage")
console.timeEnd('time elapsed');

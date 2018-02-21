const fs = require("fs")


let getCounts = (type) => {

  let data = fs.readFileSync('./data/test.ssv', "utf-8")

  let objArray = data.split("\n")

  let existingIds = []
  var tempItem;

  for(let i=0; i<objArray.length; i++){

    let row = objArray[i]
    let columns = row.split(" ")
    let selectedCol

    switch (type) {
      case 'stage':
        selectedCol = columns[0]
        break
      case 'event':
        selectedCol = columns[1]
        break
      case 'error':
        selectedCol = columns[2]
        break
      default:
        break
    }

    if(existingIds.find(function(val) { tempItem = val; return val.type === selectedCol })){
      tempItem.count = tempItem.count + 1
    }
    else{
      existingIds.push({type: selectedCol, count: 1})
    }
  }

  return existingIds;
};


console.log(getCounts("stage"))
// processing time
console.time('time elapsed');
getCounts("stage")
console.timeEnd('time elapsed');

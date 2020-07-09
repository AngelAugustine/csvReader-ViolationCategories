const fs = require('fs');
const parse = require('csv-parse');
let result= [];

fs.createReadStream('C4C-dev-challenge-2018.csv')
.pipe(parse({
    delimiter: ','
}))
.on('data', function(dataRow){
    //Reading csv file
    result.push(dataRow)
})
.on('end', function(){
    // console.log(result)

// **********************************************************
var newArray=[];
for(var i=1,j=0; i <result.length; i++,j++){
    //All categories into a new array
   newArray[j]=result[i][2];
//    console.log(newArray)
}

//Count of Violations in each Category
Categoryresult = { };
for(var i = 0; i < newArray.length; ++i) {
    if(!Categoryresult[newArray[i]])
    Categoryresult[newArray[i]] = 0;
    ++Categoryresult[newArray[i]];
}
console.log("Count of Violations in each Category")
console.log(Categoryresult);


// ************************************************************


})


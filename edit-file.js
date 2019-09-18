'use strict'

//files/data/person.json

const fs = require('fs');

// const fileName = process.argv[2];

// const fileToRead = fileName;
const fileToRead2 = `${__dirname}/files/data/person.json`;
const dataRead = [];
fs.readFile(fileToRead2, (err,data) =>{
    if(err){
        console.error(err);
        return
    }

    dataRead.push(JSON.parse(data));
    console.log(dataRead);

    changeDatData();
    fs.writeFile(fileToRead2, JSON.stringify(dataRead[0]), (err)=>{
        if (err) throw err;
        console.log("saved it!")
    })
});

function changeDatData(){
    dataRead[0].firstName = "Bob";
    dataRead[0].lastName = "The Builder"
    dataRead[0].favoriteFoods = ["Hammers", "Nails", "Sizzurp"]
    console.log(dataRead);
};

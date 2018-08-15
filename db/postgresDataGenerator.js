// 3rd party imports
const fs = require('fs');
const faker = require('faker');

// set number of rows
const numMenus = 10000000;
// submenu partition is based on total number of submenus / 5
let numSubs1 = 3999595;
let numSubs2 = 7999190;
let numSubs3 = 11998785;
let numSubs4 = 15998380;
let numSubs5 = 19997975;

// this function is used to generate random numbers
const generateRandomNumber = (lowerLimit, upperLimit) => {
  return lowerLimit + Math.floor(upperLimit * Math.random());
};

// this function is used to create menus
const createMenus = () => { 
  // file read is necessary because names need to be unique and consistent across all team members
  fs.readFile('./csv/names.csv', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    // create array based on new lines
    const names = data.split('\n');
    // counter is used because team decided on indexing restaurant primary keys starting at 1
    let counter = 1;
    for (let i = 0; i < numMenus; i++) {
      // console.log the id and the name which is then > into menus.csv
      console.log(`${counter},${names[i]}`);
      counter++;
    };
  });
}

// this function is used to create subMenus
const createSubs = () => {
  // counter is used as primary key
  let counter = 0;
  for (let i = 0; i < numMenus; i++) {
    // randomly generate between 1 and 3 submenus
    const numOfSubs = generateRandomNumber(1, 3);
    for (let j = 0; j < numOfSubs; j++) {
      // console.log the necessary columns and > into submenus.csv
      console.log(`${counter},${faker.lorem.word()},${generateRandomNumber(1, numMenus)}`)
      counter++;
    }
  }
}

// this function is used to create items
const createItems = () => {
  // this counter is the primary key and needs to be manually updated after each csv section is made
  let counter = 71979905;
  // this for loop needs to be manualy updated based on what section of items is being generated
  for (let i = numSubs4; i < numSubs5; i++) {
    // this generates a random number of menu items between 3 and 6
    const numOfItems = generateRandomNumber(3, 4);
    for (let j = 0; j < numOfItems; j++) {
      // console.log the necessary columns and > to items1.csv, items2.csv, items3.csv, etc.
      console.log(`${counter},${faker.lorem.word()},${faker.lorem.sentence()},${generateRandomNumber(1, 98)},${generateRandomNumber(0, numSubs5 + 1)}`);
      counter++;
    }
  }
};

// the function invocations below need to be commented out based on which csv is being generated
// this is the code to create the csv: time node --max-old-space-size=8000 dataGenerator.js > items5.csv

// createMenus();
// createSubs();
createItems();
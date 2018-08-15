// 3rd party imports
const fs = require('fs');
const faker = require('faker');

// set number of rows
const numMenus = 100000;

// this function is used to generate random numbers
const generateRandomNumber = (lowerLimit, upperLimit) => {
  return lowerLimit + Math.floor(upperLimit * Math.random());
};

// this function is used to create menus with subMenus and items as nested collections
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
      const subMenus = {};
      const numOfSubs = generateRandomNumber(1, 3);
      for (let j = 0; j < numOfSubs; j++) {
        const items = [];
        const numOfItems = generateRandomNumber(3, 4);
        for (let j = 0; j < numOfItems; j++) {
          item = [];
          item.push(faker.lorem.word());
          item.push(faker.lorem.sentence());
          item.push(generateRandomNumber(1, 98).toString()); 
          items.push(item); 
        }
        // this might lose data if the same submenu is generated within a submenus object
        subMenus[faker.lorem.word()] = items;
      }
      // console.log the id and the name which is then > into menus.csv
      console.log(`${counter};${names[i]};${JSON.stringify(subMenus)}`);
      counter++;
    };
  });
}

// this is the code to create the csv: time node --max-old-space-size=8000 dataGenerator.js > cass-menus.txt

createMenus();

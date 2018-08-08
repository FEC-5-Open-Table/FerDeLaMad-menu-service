const mongoose = require('../db/db.js').mongoose;
const Menu = require('../db/db.js').Menu;

const getData = (id, callback) => {
  Menu
    .findOne({ id })
    .exec(callback);
};

const insertData = (body) => {
  Menu.findOne({}, {}, { sort: {id: -1}}, function (err, data) {
    return data;
  }).then((data) => {
    body.id = data.id + 1;
    console.log('body: ', body);
    Menu.insertMany(body, () => mongoose.connection.close());
    console.log('inserted into database');
  }).catch(() => {
    console.log('insert error');
  });
};

const updateData = (body) => {
  deleteData(body.id);
  Menu.insertMany(body, () => mongoose.connection.close());
};

const deleteData = (id) => {
  console.log(id);
  Menu.findOne({id}).then((doc) => {
    Menu.deleteOne({id: doc.id}, function (err) {
      if (err) return handleError(err);
    });
    console.log('deleted item ', doc.id)
  }).catch(() => {
    console.log('delete error');
  })
}

module.exports = {
  getData,
  insertData,
  updateData,
  deleteData,
}

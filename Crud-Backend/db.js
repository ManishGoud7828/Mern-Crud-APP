const mongoose = require("mongoose");
mongoose.set('strictQuery', true);


mongoose.connect('your database put')
  .then((response) => {
    console.log("DataBase is Connected Successfully--!");
  })
  .catch((err) => {
    console.log(err);
  });




  

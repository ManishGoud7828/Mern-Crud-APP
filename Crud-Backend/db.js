const mongoose = require("mongoose");
mongoose.set('strictQuery', true);


mongoose.connect('mongodb+srv://AshuPanda:b959bL3lPfxV8VlE@cluster0.q42yghj.mongodb.net/crud-app?retryWrites=true&w=majority')
  .then((response) => {
    console.log("DataBase is Connected Successfully--!");
  })
  .catch((err) => {
    console.log(err);
  });




  
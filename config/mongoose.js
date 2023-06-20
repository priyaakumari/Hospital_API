const mongoose = require('mongoose');


//connect to DB
//mongoose.connect('mongodb://127.0.0.1:27017/hospital_API', { useNewUrlParser: true ,useUnifiedTopology: true });
const DB = 'mongodb+srv://priyaprasad407:aFzmNLKvogdYOmOF@cluster0.venggr4.mongodb.net/hospital_API?retryWrites=true&w=majority'

mongoose.connect(DB).then(()=>{
     console.log('connection successful');
 }).catch((err) => console.log("no connection " + err));
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', function () {
    console.log("Successfully connected to db");
});

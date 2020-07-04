const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const mongoose = require("mongoose");
const {MONGOURI} = require("./config/keys");
const cors = require('cors');

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
},(error)=>{
    if(!error) return console.log(`la connexion à reusit avec succees`);
})
app.use(cors());
app.use(express.json());
app.use(require('./routers/EmployeRouter'));

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
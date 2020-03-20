const express = require('express');
const app = express();
const db = require('./config/db');

db.authenticate().then(res => console.log('connected successfully')).catch(err => console.log(err))

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server started on localhost:${PORT}`));
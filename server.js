const express = require('express');
const app = express();
const db = require('./config/db');

db.authenticate().then(res => console.log('PostgreSQL connected successfully')).catch(err => console.log(err))

app.use(express.json({ extended: false }));

// routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server started on localhost:${PORT}`));
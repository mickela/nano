const express = require('express');
const path = require('path');
const app = express();
// const db = require('./config/db');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

// db.authenticate().then(res => console.log('PostgreSQL connected successfully')).catch(err => console.log(err))

app.use(express.json({ extended: false }));
app.disable('x-powered-by');

// routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server started on localhost:${PORT}`));
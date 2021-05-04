const express = require('express');
const app = express();
const router = require('./routes/index');
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
    //console.log(`Server started on port ${3000}`);
    console.log(`Server started on port: http://localhost:${PORT}`);
});
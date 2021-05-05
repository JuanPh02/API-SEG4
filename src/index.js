const express = require('express');
const app = express();
const router = require('./routes/index');
const PORT = 3001;

app.use('/', router);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`Server started on port: http://localhost:${PORT}`);
});
const express = require("express");
const router = express.Router();
const { getPersons } = require('../controllers/persons.controller');

router.get('/', (req, res) => {
    res.json({
        "Title": "Que pasa pues",
        "Description": "Tematica respectiva frente a criticas constitucionales dependientes de la reforma",
        "Clave": 1234
    });
});

router.get('/persons', getPersons);

module.exports = router;
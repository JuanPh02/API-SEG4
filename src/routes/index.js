const express = require("express");
const router = express.Router();
const _personsController = require("../controllers/persons.controller");

router
    .get('/getPersons', _personsController.getPersons)
    .post('/persons', _personsController.createPerson)
    .put('/persons', _personsController.updatePerson)
    .delete('/persons', _personsController.deletePerson);

module.exports = router;
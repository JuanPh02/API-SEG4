const express = require("express");
const router = express.Router();
const _personsController = require("../controllers/persons.controller");

router
    .get('/persons', _personsController.getPersons)
    .get('/report', _personsController.getReport)
    .get('/persons/:id', _personsController.getPersonById)
    .post('/persons', _personsController.createPerson)
    .put('/persons/:id', _personsController.updatePerson)
    .delete('/persons/:id', _personsController.deletePerson);

module.exports = router;
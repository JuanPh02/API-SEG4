const PostgresService = require('../services/postgres.service');
//const _pg = new PostgresService();

/**
 * Método para consultar todas las personas
 * @param {Request} req 
 * @param {Response} res 
 */
const getPersons = (req, res) => {
    return res.send("Personas, si señor y cambiaoo");
};

const createPerson = (req, res) => {
    return res.send("Create Person");
}

const updatePerson = (req, res) => {
    return res.send("Update Person");
}

const deletePerson = (req, res) => {
    return res.send("Delete Person");
}

module.exports = { getPersons, createPerson, updatePerson, deletePerson };
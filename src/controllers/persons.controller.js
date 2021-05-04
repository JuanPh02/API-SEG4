const PostgresService = require('../services/postgres.service');
//const _pg = new PostgresService();

/**
 * Método para consultar todas las personas
 * @param {Request} req 
 * @param {Response} res 
 */
const getPersons = (req, res) => {
    res.send("Personas, si señor y cambiaoo");
};

module.exports = {
    getPersons
}
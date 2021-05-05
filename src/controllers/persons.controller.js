const { response } = require('express');
const PostgresService = require('../services/postgres.service');
const _pg = new PostgresService();

/**
 * Método para consultar todas las personas
 * @param {Request} req 
 * @param {Response} res 
 */
const getPersons = async(req, res) => {
    try {
        let sql = 'SELECT * FROM persons';
        let result = await _pg.executeSql(sql);
        let rows = result.rows;
        return res.send({
            ok: true,
            message: "Personas consultadas",
            content: rows,
        });
    } catch {
        return res.send({
            ok: false,
            message: "Ha ocurrido un error",
            content: error
        });
    }

};

/**
 * Metodo para consultar una persona por Id
 * @param {Request} req 
 * @param {Response} res 
 * @returns 
 */
const getUsersById = async(req, res) => {
    try {
        const id = req.params.id;
        let sql = `SELECT * FROM persons WHERE id = ${id}`;
        let result = await _pg.executeSql(sql);
        let rows = result.rows;
        return res.send(rows);
    } catch (error) {
        return res.send({
            ok: false,
            message: "Ha ocurrido un error",
            content: error
        });
    }
};

/**
 * Metodo para crear una nueva persona
 * @param {Request} req 
 * @param {Response} res 
 * @returns 
 */
const createPerson = async(req, res) => {
    try {
        let person = req.body;
        let sql = `INSERT INTO persons (name, email) VALUES ('${person.name}', '${person.email}')`;
        let result = await _pg.executeSql(sql);
        console.log(result);
        return res.send({
            ok: true,
            message: "Persona creada correctamente",
            content: person
        })
    } catch (error) {
        return res.send({
            ok: false,
            message: "Ha ocurrido un error al crear la persona",
            content: error
        });
    }
};

/**
 * Metodo para actualizar una persona
 * @param {Request} req 
 * @param {Response} res 
 * @returns 
 */
const updatePerson = async(req, res) => {
    try {
        const id = req.params.id;
        let person = req.body;
        let sql = `UPDATE persons SET name = '${person.name}', email = '${person.email}' WHERE id = ${id}`;
        let result = await _pg.executeSql(sql);
        console.log(result);
        return res.send({
            ok: result.rowCount == 1,
            message: result.rowCount == 1 ? "La persona fue actualizada correctamente" : "La persona no pudo ser actualizada",
            content: person
        })
    } catch (error) {
        return res.send({
            ok: false,
            message: "Ha ocurrido un error al actualizar la persona",
            content: error
        });
    }
}

/**
 * Metodo para eliminar una persona
 * @param {Request} req 
 * @param {Response} res 
 * @returns 
 */
const deletePerson = async(req, res) => {
    try {
        const id = req.params.id;
        let sql = `DELETE FROM persons WHERE id = ${id}`;
        let result = await _pg.executeSql(sql);
        console.log(result);
        res.send(`Persona ${id} eliminada correctamente`);
    } catch (error) {
        return res.send({
            ok: false,
            message: "Ha ocurrido un error al eliminar la persona",
            content: error
        });
    }
}

module.exports = { getPersons, getUsersById, createPerson, updatePerson, deletePerson };
const PostgresService = require('../services/postgres.service');
const _pg = new PostgresService();

/**
 * Método para consultar todas las personas
 * @param {Request} req 
 * @param {Response} res 
 */
const getPersons = async(req, res) => {
    let sql = 'select * from persons';
    try {
        let result = await _pg.executeSql(sql);
        let rows = result.rows;
        return res.send(rows);
    } catch {
        return res.send({
            ok: false,
            message: "Ha ocurrido un error",
            content: error
        });
    }

};

const createPerson = async(req, res) => {
    try {
        let person = req.body;
        let sql = `insert into persons (name, email) values ('${person.name}', '${person.email}')`;
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

const updatePerson = (req, res) => {
    return res.send("Update Person");
}

const deletePerson = (req, res) => {
    return res.send("Delete Person");
}

module.exports = { getPersons, createPerson, updatePerson, deletePerson };
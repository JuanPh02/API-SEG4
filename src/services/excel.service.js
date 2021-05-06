const ExcelJS = require('exceljs');

const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet('Hoja1');

const toExcel = (rows) => {
    try {
        //Definimos titulos de las columnas, claves y anchos
        sheet.columns = [
            { header: 'Id', key: 'id', width: 10 },
            { header: 'Name', key: 'name', width: 50 },
            { header: 'Email', key: 'email', width: 50 }
        ];

        //Añadimos los datos a las filas 
        sheet.addRows(rows);
        //Guardamos el archivo
        save();
    } catch (error) {
        console.log("Error al crear el reporte");
    }
};

const save = async() => {
    var date = new Date();
    var path = "./excel_reports/Report.xlsx";
    await workbook.xlsx.writeFile(path);
};

module.exports = { toExcel };
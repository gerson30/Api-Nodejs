//al visitar las rutas de product.routes se ejecutaran en este archivo

//se importa la conexion 
import { pool } from 'mssql';
import { getConnection, sql, queries } from '../database'
//importar los querys


//metodo para exporta los datos mediante un query
//METODO GET
export const getVehicles = async (req, res) => {
    try {
        //aquí se llama la conexión y retorna al pool
        const pool = await getConnection()
        //el pool lo que hace es realizar una peticion y hacer una consulta con el query que llama los datos de la tabla IC_entrada
        //await lo que hace es detener cualquier procedimiento y dejarlo en espera para el ejecutarlo al momento de encontrar otra función
        //se llama el query del metodo Get que esta en el archivo database/querys
        const result = await pool.request().query(queries.getAllVehicle);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//metodo para agregar un nuevo registro
//METODO POST

export const createNewVehicles = async (req, res) => {
    //recibir todos los datos del cliente
    const { fecha_ingreso, numero_serie, placa_vehiculo, foto_placa, foto_contenedor, foto_sello, nombre_audit } = req.body

    if (fecha_ingreso == null || numero_serie == null || placa_vehiculo == null ||
        foto_placa == null || foto_contenedor == null || foto_sello == null ||
        nombre_audit == null) {
        return res.status(400).json({ msg: ' Por favor llena todos los campos' })
    }

    try {

        const pool = await getConnection();

        await pool
            .request()
            .input("ID", sql.VarChar. id)
            .input("fecha_ingreso", sql.VarChar, fecha_ingreso)
            .input("numero_serie", sql.VarChar, numero_serie)
            .input("placa_vehiculo", sql.VarChar, placa_vehiculo)
            .input("foto_placa", sql.VarChar, foto_placa)
            .input("foto_contenedor", sql.VarChar, foto_contenedor)
            .input("foto_sello", sql.VarChar, foto_sello)
            .input("nombre_audit", sql.VarChar, nombre_audit)
            .query(queries.addNewVehicle);

        // res.json({ fecha_ingreso, numero_serie, placa_vehiculo, foto_placa, foto_contenedor, foto_sello, nombre_audit });
        
        return res.redirect('/list.html');

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

//obtener un unico vehiculo por ID
export const getProductById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection()
    const result = await pool
        .request().
        input("ID", id).
        query(queries.getProductById);
    res.send(result.recordset[0]);
};


//DELETE 
export const deleteProductById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection()
    const result = await pool
        .request()
        .input("ID", id)
        .query(queries.deleteProductById);

    res.json('Se eliminó el registro con id: ' + id);
};

//consulta total de registros
export const getTotalVehicles = async (req, res) => {
    const pool = await getConnection()
    const result = await pool
        .request()
        .query(queries.getTotalVehicles);

    res.json(result.recordset[0]['']);
};

//UPDATE
export const updateVehicleById = async (req, res) => {
    //recibir todos los datos del cliente
    const { fecha_ingreso, numero_serie, placa_vehiculo, foto_placa, foto_contenedor, foto_sello, nombre_audit } = req.body;
    const { id } = req.params;
    if (fecha_ingreso == null || numero_serie == null || placa_vehiculo == null ||
        foto_placa == null || foto_contenedor == null || foto_sello == null ||
        nombre_audit == null) {
        return res.status(400).json({ msg: ' Por favor llena todos los campos' })
    }

    const pool = await getConnection();
    await pool
        .request()
        .input('fecha_ingreso', sql.DateTime, fecha_ingreso)
        .input('numero_serie', sql.Numeric, numero_serie)
        .input('placa_vehiculo', sql.VarChar, placa_vehiculo)
        .input('foto_placa', sql.VarChar, foto_placa)
        .input('foto_contenedor', sql.VarChar, foto_contenedor)
        .input('foto_sello', sql.VarChar, foto_sello)
        .input('nombre_audit', sql.VarChar, nombre_audit)
        .input('ID', sql.Int, id)
        .query(queries.updateVehicleById);

    res.json({ fecha_ingreso, numero_serie, placa_vehiculo, foto_placa, foto_contenedor, foto_sello, nombre_audit }
    );
};
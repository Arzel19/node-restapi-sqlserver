import { getConnection, sql, queries } from '../database'

export const getDenuncia = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllDenuncia);
        res.json(result.recordset);
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
};

export const createNewDenuncia = async (req, res) => {
    const { Organizacion, Pais, Estado, Centro, Nombre, Correo, Telefono, Detalle, Fecha, Contraseña } = req.body

    try {
        const pool = await getConnection();

        await pool.request()
            .input("Organizacion", sql.VarChar, Organizacion)
            .input("Pais", sql.VarChar, Pais)
            .input("Estado", sql.VarChar, Estado)
            .input("Centro", sql.Int, Centro)
            .input("Nombre", sql.VarChar, Nombre)
            .input("Correo", sql.VarChar, Correo)
            .input("Telefono", sql.VarChar, Telefono)
            .input("Detalle", sql.VarChar, Detalle)
            .input("Fecha", sql.VarChar, Fecha)
            .input("Contraseña", sql.VarChar, Contraseña)
            .query(queries.addNewDenuncia);

        res.json({ Organizacion, Pais, Estado, Centro, Nombre, Correo, Telefono, Detalle, Fecha, Contraseña });
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}

export const getDenunciaByFolio = async (req, res) => {
    const { folio, password } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
        .input('folio', sql.VarChar, folio)
        .input('password', sql.VarChar, password)
        .query(queries.getDenunciaByFolio);    
    res.send(result.recordset[0]);
}

export const updateDenunciaByFolio = async (req, res)=>{
    const { comentarios, estatus} = req.body;
    const {folio } = req.params;

    const pool= await getConnection();
    await pool.request()
    .input("comentarios",sql.VarChar,comentarios)
    .input("estatus",sql.VarChar,estatus)
    .input("folio",sql.VarChar,folio)
    .query(queries.updateDenunciaByFolio);

    res.json({comentarios,estatus,folio});
}
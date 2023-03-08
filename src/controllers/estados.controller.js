import { getConnection, sql, queries } from '../database'

export const getEstadosByID = async (req, res) => {
    const { PaisID } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
        .input('PaisID', sql.VarChar, PaisID)
        .query(queries.getEstadosById);    
    res.send(result.recordset);
}
import { getConnection, sql, queries } from '../database'

export const getUsuariosByLogin = async (req, res) => {
    const { username, password } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
        .input('username', sql.VarChar, username)
        .input('password', sql.VarChar, password)
        .query(queries.getUsuariosByLogin);    
    res.send(result.recordset);
}
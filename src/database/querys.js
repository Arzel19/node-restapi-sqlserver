
export const queries = {
    getAllDenuncia: 'Select * from denuncia',
    addNewDenuncia:
        'insert into Denuncia (ORGANIZACION,PAIS,ESTADO,CENTRO,NOMBRE,CORREO,TELEFONO,DETALLE,FECHA,CONTRASEÑA) values (@organizacion,@pais,@estado,@centro,@nombre,@correo,@telefono,@detalle,@fecha,@contraseña)',
    getDenunciaByFolio: "select * from denuncia where folio like @folio and contraseña like @password",
    updateDenunciaByFolio: "update denuncia SET comentarios = @comentarios, estatus=@estatus where folio like @folio",
    getAllOrganizacion: 'select * from organizacion',
    getAllPais: 'select * from pais',
    getEstadosById: 'select * from estados where PaisID=@PaisID',
    getUsuariosByLogin: 'select * from usuarios where usuarioname like @username and password like @password'
}
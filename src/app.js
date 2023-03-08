import express from 'express'
import config from './config'

import denunciaRoutes from './routes/denuncia.routes'
import estadosRoutes from './routes/estados.routes'
import organizacionRoutes from './routes/organizacion.routes'
import paisRoutes from './routes/pais.routes'
import usuariosRoutes from './routes/usuarios.routes'

var cors = require('cors')
const app = express()

// settings
app.set('port', config.port)

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(denunciaRoutes)
app.use(organizacionRoutes)
app.use(estadosRoutes)
app.use(paisRoutes)
app.use(usuariosRoutes)

app.listen(5500, function (){
    console.log('CORS-enabled web server listening on port 5500')
})

console.log("server on port ",config.port)

export default app
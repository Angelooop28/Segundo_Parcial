const guardar = require('./con_guardar_datos')

module.exports = app => {
    const connect = guardar

    app.post('/registro_de_productos', (req, res) => {
        const descripcion = req.body.descripcion
        const unidad = req.body.unidad
        const cantidad = req.body.cantidad
        const proveedor = req.body.proveedor
       
    

        connect.query('insert into productos SET ?', {
            descripcion, unidad, cantidad, proveedor
        }, (error, resultado) => {
            res.redirect('/registro')
        })
    })
}
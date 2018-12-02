const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');

const app = express();

//Configuracion
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Rutas

app.use('/api/tasks' ,require('./routes/task.routes'));


//Archivos Estaticos
//Utilizamos path.join ya que de esta manera funciona tanto en linux y windows
app.use(express.static(path.join(__dirname,'public')));



//Inicializar Servidor

app.listen(app.get('port'), ()=> {
    console.log('Sever on port '+ app.get('port'));
});
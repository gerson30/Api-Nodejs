//importar app (recordar que index.js es desde donde se ejecuta la app)

import app from  './app'

app.listen(app.get('port'))

console.log('Server on port', app.get('port'))




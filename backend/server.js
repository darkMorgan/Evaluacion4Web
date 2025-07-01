const express = require('express');
const cors = require('cors');
const sequelize = require('./database');
const estudianteRoutes = require('./routes/estudianteRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001; // ✅ Fallback para Render

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('🚀 API de Estudiantes funcionando correctamente');
});

app.use('/api/estudiantes', estudianteRoutes);

sequelize.sync()
  .then(() => {
    console.log('✅ Base de datos sincronizada');
    app.listen(PORT, () =>
      console.log(`✅ Servidor backend corriendo en http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error('❌ Error al sincronizar base de datos:', err);
  });

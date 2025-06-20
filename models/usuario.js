const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  tipo: String,       // Estudiante, Docente, Administrativo, Directivo
  material: String,   // Papel, Plástico, Vidrio
  lugar: String       // Punto de recolección
});

module.exports = mongoose.model('Usuario', usuarioSchema);

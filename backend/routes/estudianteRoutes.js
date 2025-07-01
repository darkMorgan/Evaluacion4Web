const express = require('express');
const router = express.Router();
const Estudiante = require('../models/Estudiante');

// Obtener todos los estudiantes
router.get('/', async (req, res) => {
  const estudiantes = await Estudiante.findAll();
  res.json(estudiantes);
});

// Obtener un estudiante por código
router.get('/:codigo', async (req, res) => {
  const estudiante = await Estudiante.findByPk(req.params.codigo);
  estudiante ? res.json(estudiante) : res.status(404).json({ error: 'No encontrado' });
});


// Crear estudiante
router.post('/', async (req, res) => {
  const estudiante = await Estudiante.create(req.body);
  res.json(estudiante);
});

// Actualizar estudiante
router.put('/:codigo', async (req, res) => {
  const estudiante = await Estudiante.findByPk(req.params.codigo);
  if (!estudiante) return res.status(404).json({ error: 'No encontrado' });

  await estudiante.update(req.body);
  res.json(estudiante);
});

// Eliminar estudiante
router.delete('/:codigo', async (req, res) => {
  const estudiante = await Estudiante.findByPk(req.params.codigo);
  if (!estudiante) return res.status(404).json({ error: 'No encontrado' });

  await estudiante.destroy();
  res.json({ mensaje: 'Estudiante eliminado' });
});



module.exports = router;

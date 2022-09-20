const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');
const { route } = require('./me');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);
router.get('/:id/edit', courseController.edit);
router.patch('/:id/restore', courseController.restore);
router.put('/:id', courseController.update);
router.delete('/:id/force', courseController.forceDestroy);
router.delete('/:id', courseController.destroy);



module.exports = router;

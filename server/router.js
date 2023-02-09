const TaskController = require('./controllers/Tasks.controller');

const router = require('express').Router();

router.get('/all-tasks', TaskController.getAllTasks);
router.get('/tasks/*', TaskController.getFilteredTasks);
router.get('/task/:id', TaskController.getTaskById);

router.post('/create-task', TaskController.createTask);

router.put('/set-task-done/:id', TaskController.setTaskDone);

router.delete('/task/:id', TaskController.removeTaskById);
router.delete('/tasks', TaskController.removeMultipleTasks);

router.module.exports = router;

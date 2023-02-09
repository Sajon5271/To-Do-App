const Tasks = require('./../models/Tasks.model');

const TaskController = {};

TaskController.createTask = async function (req, res, next) {
  try {
    const task = req.body;
    res.send(await Tasks.createTask(task));
  } catch (error) {
    console.log(error);
    next();
  }
};

TaskController.getAllTasks = async function (req, res, next) {
  try {
    const allTasks = await Tasks.getAllTasks();
    res.send(allTasks);
  } catch (error) {
    console.log(error);
    next();
  }
};

TaskController.getTaskById = async function (req, res, next) {
  try {
    const id = req.params.id;
    const task = await Tasks.getTaskById(id);
    res.send(task);
  } catch (error) {
    console.log(error);
    next();
  }
};

TaskController.setTaskDone = async function (req, res, next) {
  try {
    const id = req.params.id;
    const task = await Tasks.setTaskDone(id);
    res.send(task);
  } catch (error) {
    console.log(error);
    next();
  }
};

TaskController.removeTaskById = async function (req, res, next) {
  try {
    const id = req.params.id;
    const task = await Tasks.removeTask(id);
    res.send(task);
  } catch (error) {
    console.log(error);
    next();
  }
};

TaskController.removeMultipleTasks = async function (req, res, next) {
  try {
    const ids = req.body;
    const task = await Tasks.removeMultipleTasks(ids);
    res.send(task);
  } catch (error) {
    console.log(error);
    next();
  }
};

TaskController.getFilteredTasks = async function (req, res, next) {
  const splitPath = req.path.split('/');
  const status = splitPath[splitPath.length - 1];
  try {
    if (status === 'past') {
      res.send(await Tasks.getPastTasks());
    } else if (status === 'present') {
      res.send(await Tasks.getCurrentTasks());
    } else if (status === 'upcoming') {
      res.send(await Tasks.getUpcomingTasks());
    } else if (status === 'done') {
      res.send(await Tasks.getDoneTasks());
    } else {
      res.status(404).send('Bad Request');
    }
  } catch (error) {
    console.log(error);
    next();
  }
};

module.exports = TaskController;

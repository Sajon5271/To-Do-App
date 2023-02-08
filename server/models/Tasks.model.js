const Tasks = require('./TasksSchema');

const createTask = async function (task) {
  try {
    return await Tasks.create(task);
  } catch (error) {
    console.log(error);
  }
};

const getAllTasks = async function () {
  try {
    return await Tasks.find({});
  } catch (error) {
    console.log(error);
  }
};

const getTaskById = async function (id) {
  try {
    return await Tasks.findById(id);
  } catch (error) {
    console.log(error);
  }
};

const getUpcomingTasks = async function () {
  const currTime = Date.now();
  try {
    return Tasks.find({ taskStartTime: { $gt: currTime } });
  } catch (error) {
    console.log(error);
  }
};

const getPastTasks = async function () {
  const currTime = Date.now();
  try {
    return Tasks.find({ taskEndTime: { $lt: currTime } });
  } catch (error) {
    console.log(error);
  }
};

const getCurrentTasks = async function () {
  const currTime = Date.now();
  try {
    return Tasks.find({
      taskStartTime: { $lte: currTime },
      taskEndTime: { $gt: currTime },
    });
  } catch (error) {
    console.log(error);
  }
};

const getDoneTasks = async function () {
  try {
    return Tasks.find({ alreadyDone: true });
  } catch (error) {
    console.log(error);
  }
};

const setTaskDone = async function (id) {
  try {
    const currTask = await getTaskById(id);
    currTask.alreadyDone = true;
    currTask.save();
  } catch (error) {
    console.log(error);
  }
};

const removeTask = async function (id) {
  try {
    return await Tasks.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
};

const removeMultipleTasks = async function (ids) {
  try {
    return await Tasks.deleteMany({
      _id: {
        $in: ids,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

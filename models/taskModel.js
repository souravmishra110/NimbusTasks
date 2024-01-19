const mongoose = require('mongoose');
const Task = require('../schema/tasks');

module.exports.addTask = (taskParams) => {
    taskParams['_id'] = new mongoose.Types.ObjectId();
    const task = new Task(taskParams);
    return task.save();
}

module.exports.listTasks = (page, size, status) => {
    let queryParams = {};
    if (status) queryParams['status'] = status;
    return Task.find(queryParams)
        .sort({ createdAt: -1 })
        .skip(Number(size) * Number(page))
        .limit(Number(size));
}

module.exports.getTaskById = (id) => {
    return Task.findOne({
        '_id': id
    });
}

module.exports.updateTaskById = (id, taskParams) => {
    return Task.updateOne({ '_id': id }, { $set: taskParams });
}
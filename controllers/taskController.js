const responseWrapper = require('../utils/responseWrapper');
const errorCodes = require('../utils/exceptions.json');
const { addTask, listTasks, getTaskById, updateTaskById } = require('../models/taskModel');

module.exports.createTask = async (req, res) => {
    try {
        let newTask = await addTask(req.body);
        responseWrapper.sendOk(res, errorCodes['10200'], '10200', newTask);
    }
    catch (err) {
        console.log(err);
        responseWrapper.badRequest(res, errorCodes['10400'], '10400');
    }
}

module.exports.listTasks = async (req, res) => {
    try {
        let page = req.query.page || 0;
        let size = req.query.size || 0;
        let status = req.query.status || '';

        let taskList = await listTasks(page, size, '');
        responseWrapper.sendOk(res, errorCodes['10200'], '10200', taskList);
    }
    catch (err) {
        console.log(err);
        responseWrapper.badRequest(res, errorCodes['10400'], '10400');
    }
}

module.exports.getTaskById = async (req, res) => {
    try {
        const id = req.params.id;
        console.log("debug  id", id);

        let task = await getTaskById(id);
        responseWrapper.sendOk(res, errorCodes['10200'], '10200', task);
    }
    catch (err) {
        console.log(err);
        responseWrapper.badRequest(res, errorCodes['10400'], '10400');
    }
}

module.exports.updateTaskById = async (req, res) => {
    try {
        const id = req.params.id;
        let updates = req.body;

        let validUpdates = ["status", "title", "description", "category", "dueDate", "completed"]

        let isValidUpdates = updates.eve

        let result = await updateTaskById(id, taskParams);
        responseWrapper.sendOk(res, errorCodes['10200'], '10200', result);
    }
    catch (err) {
        console.log(err);
        responseWrapper.badRequest(res, errorCodes['10400'], '10400');
    }
}
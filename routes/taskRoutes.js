const { createTask, listTasks, getTaskById } = require("../controllers/taskController");
const { validateCreateTask, validateTaskById } = require("../validators/taskValidator");

module.exports = function (settings){
    let { app } = settings;

    app.post('/tasks', validateCreateTask, createTask);

    app.get('/tasks', listTasks);

    app.get('/tasks/:id', validateTaskById, getTaskById);

    app.patch('/tasks/:id', (req, res) => res.send("Update (PATCH) a Task by ID"));

    app.get('/tasks/:id', (req, res) => res.send("get task by id"));

}
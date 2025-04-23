const Task = require('../model/task.model');

// dung de hien tat ca task dang co
const getAllTasks = async (req, res) => {
    try {
        const allTask = await Task.find({});
        res.status(200).json(allTask)
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// dung de 1 task theo id gan theo
const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const oneTask = await (Task.findById(id))
        res.status(200).json(oneTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//dung de tao task
const createTask = async (req, res) => {
    try {
        const createTask = await Task.create(req.body);
        res.status(201).json(createTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//dung de edit task
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const findTask = await Task.findByIdAndUpdate(id,req.body);
        if (!findTask) {
            return res.status(404).json({ message: "Failed to find task" });
        }
        const updateTask = await Task.findById(id);
        res.status(200).json(updateTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//dung de xoa task
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const findTask = await Task.findById(id);
        if (!findTask) {
            return res.status(404).json({ message: "Failed to find task" });
        }
        const updateTask = await Task.findByIdAndDelete(id);
        res.status(200).json({message:'Delete task successfully'});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//export module
module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
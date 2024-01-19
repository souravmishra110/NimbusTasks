const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    status: { // 1- Active, 0- Deleted
        type: Number,
        required: true,
        default: 1
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        enum: ['work', 'personal', 'shopping', 'other'], // Example categories
        default: 'other',
    },
    dueDate: {
        type: Date,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User', // Reference to the User model for associating tasks with users
    },
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

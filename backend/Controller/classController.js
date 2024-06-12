
const Class = require('../models/Class');

exports.getAllClasses = async (req, res) => {
    try {
        const classes = await Class.find();
        res.json(classes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createClass = async (req, res) => {
    const { title, instructor, time } = req.body;
    try {
        const newClass = new Class({ title, instructor, time });
        await newClass.save();
        res.status(201).json(newClass);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

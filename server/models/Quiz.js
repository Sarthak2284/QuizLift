const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
});

const quizSchema = new mongoose.Schema({
    title: { type: String, required: true},
    topic: { type: String, required: true},
    questions: [questionSchema],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required:false},

},{ timestamps: true });

module.exports = mongoose.model('Quiz', quizSchema);
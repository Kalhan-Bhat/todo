const mongoose =require('mongoose');  
//
mongoose.connect("mongodb+srv://BhatMan:Kalhan,,King%40123@bhatman.pwprz.mongodb.net/?retryWrites=true&w=majority&appName=BhatMan")
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);


module.exports = { todo: todo };
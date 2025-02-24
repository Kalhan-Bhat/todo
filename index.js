const express = require('express');
const { updatetodo } = require('./types');
const { createtodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');

const app = express();
const port = 3000
app.use(express.json());
app.use(cors());
app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createtodo.safeParse(createPayload);
    if (!parsedPayload.success) { // Fixed "sucess" to "success"
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"todo created"
    })
    // mongodb/sql
})
app.get('/todos', async function(req, res){
   const todos = await todo.find({});
   res.json({
    todos
   })
})
app.put("/completed", async function(req,res){
    const updatePayload=req.body;
    const parsedPayload=updatetodo.safeParse(updatePayload);
    if(!parsedPayload.sucess){
        res.status(411).json({
            msg: "You sent the wwrong imputs"
        })
        return;
    }
    await todo.update({
        _id:req.body.id,
    }, {
        completed:true
    })

    res.json({
        msg:"todo marked as complete"
    })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


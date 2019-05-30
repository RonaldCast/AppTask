const express = require('express')
const Task = require('../Models/Task');
const router =  express.Router()


//GET (task)
router.get('/', async (req, res) => {

    const tasks = await Task.find({idUser: req.user._id}) 
    res.send({
        tasks
    })

})

//GET (task/:id)
router.get('/:id', async (req, res) => {
    let id =  req.params.id

    let task = await Task.findById({_id : id})

    if(task){
        res.send({
            task
        })
    }else{
        res.send({
            message : 'Tasks no found',
            code : 404
        })
    }
})

//POST (task)
router.post('/',  (req, res) => {
    
    let  taskBody = req.body

    let task = new Task({ 
        title : taskBody.title,
        description : taskBody.description,
        tag : taskBody.tag,
        dateStart : taskBody.dateStart,
        dateEnd : taskBody.dateEnd,
        idUser : req.user._id
    })

    task.save((error) => {
        if(error){
            res.json({
                success : false, 
                message : error.message,
                code : 400,
            
            })
        }else{
            res.json({
                code : 200,
                success : true,
                message : 'task add success',
            })
        }

        
    }) 


})

//PUT (task:id)
router.put('/:id', async (req, res) => {

    try{
        let id = req.params.id
        let task = await Task.findByIdAndUpdate({ _id: id }, { $set: {    title: req.body.title,
        description: req.body.description,
        tag: req.body.tag,
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
        idUser: req.user._id } })

        if(task){
            res.send({
                message : 'Task was updated'
            })
        }else{
            res.send({
                message : 'Task was not updated'
            });
        }
    }catch(e){
         res.send({
           message : 'Bad request',
           code : 400 
         });
    }
   
})

//DELETE (task/:id)
router.delete('/:id', async (req, res) =>{

    const id = req.params.id
    
    const isDelete = await Task.deleteOne({ _id: id });
    if (isDelete.deletedCount == 1) {
      res.send({
        message: "Task was deleted"
      });
    } else {
      res.send({
        message: "Task no found for delete",
        code: 404
      });
    }
    
    

})





module.exports = router
const  express = require("express")

const app  = express()

app.get("/", (req,res)=>{
     res.send("hello")
})

app.get("/task",(req,res)=>{
   res.send("task route")

})

app.get("/task/:taskId/order/:orderID",(req,res)=>{
   res.send(`dynamic route; order=${req.params.orderID}
      task=${req.params.taskId} params =${JSON.stringify(req.params)} url= ${req.url}`)
      res.send('running')
})

app.listen(3000,()=>{
   console.log("server is running")
})

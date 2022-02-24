const express = require("express");
const cors = require("cors");

const tasksRoutes = require("./src/routes/tasksRoutes");

const app = express()
const PORT = 3030

app.use(express.json())
app.use(cors())

app.use('/tasks', tasksRoutes)

app.listen(PORT, ()=>{
    console.log(`El servidor está corriendo en el puerto: ${PORT}`)
})
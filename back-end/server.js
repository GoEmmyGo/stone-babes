// 1. I set up my endpoint in the server file.
// 2. I set up the function in the controller file sending some data.
// 3. I make sure the controller function is connected to the server file and ready to by accessed by the front end.
// 4. I set up a function in the front-end js file with an axios request accessing the endpoint I just set up (you will console.log the data in the .then here).
// 5. I set up a button and give it an eventListener that runs this^ function when it gets clicked on.


//here I am importing the express so my node server is happy and cors so that I can host my server on the same computer as my front end
const express = require('express')
const cors = require('cors')
//here I am invoking express so I can use it later on each time I need to create endpoints
const app = express()
//here I am naming my port for reference 
const port = 4400

//here I am using express to use utilize cors
app.use(cors())
app.use(express.json())

// //here I have an object with all of my request functions that will need information either from my sends database or projects database
const {getSends, deleteSend, addSend} = require('./controllers/cont-sends.js')
const {getProjects, deleteProject, addProject} = require('./controllers/cont-projects.js')

// const {getSends, deleteSend, addSend, editSend} = require('./sends-db.json')
// const {getProjects, deleteProject, addProject, editProject} = require('./projects-db.json')

// // now I will list out my requests that will use
app.get(`/api/projects`, getProjects)
app.delete(`/api/projects/:id`, deleteProject)
app.post(`/api/projects`, addProject)
// app.put(`/api/projects/:id`, editProject)
app.get(`/api/sends`, getSends)
app.delete(`/api/sends/:id`, deleteSend)
app.post(`/api/sends`, addSend)
// app.put(`/api/sends/:id`, editSend)


//here am using express to listen to my server port and letting myself know if things are working
app.listen(port, () => {
    console.log(`Server is up, yessss http://localhost:${port}`)
})


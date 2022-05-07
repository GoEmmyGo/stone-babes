let projects = require('../db/projects-db.json')
let globalId = 1
// let projects = []

module.exports = {
    getProjects: (req, res) => {
        res.status(200).send(projects)
        console.log('get projects back end')
    },
    deleteProject: (req, res) => {
        let index = projects.findIndex(elem => elem.id === +req.params.id)
        projects.splice(index, 1)
        res.status(200).send(projects)
        console.log('delete projects back end')
        //this will go into the database and look through all of the id's to compare/match and then remove the correct one
    },
    addProject: (req, res) => {
        console.log(req.body)
        let { videoURL, title, grade, location, area, notes } = req.body
        let newProject = {
            id: globalId,
            videoURL,
            title,
            grade,
            location,
            area,
            notes
        }
        projects.push(newProject)
        globalId++
        res.status(200).send(projects)
        console.log('add projects back end')
    }
    // editProject: (req, res) => {
    //     let { id } = req.params
    //     let { type } = req.body
    //     let index = projects.findIndex(elem => +elem.id === +id)

    // //     //need to finish writing out this functionality

    // }
}

//ins

//replace this with sequelize.query
// let newProject = {
//     id: globalId,
//     videoURL,
//     title,
//     grade,
//     location,
//     area,
//     notes
// }
// projects.push(newProject)
// globalId++
// res.status(200).send(projects)
// }
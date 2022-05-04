let projects = require('./projects-db.json')

module.exports = {
    getProjects: (req, res) => {
        res.status(200).send(projects)
    },
    deleteProject: (req, res) => {
        let index = projects.findIndex(elem => elem.id === +req.params.id)
        projects.splice(index, 1)
        res.status(200).send(projects)
    },
    addProject: (req, res) => {
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
    },
    editProject: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = projects.findIndex(elem => +elem.id === +id)

        //need to finish writing out this functionality

    }
}
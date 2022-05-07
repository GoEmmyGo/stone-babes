let sends = require('../db/sends-db.json')
// let sends = []

module.exports = {
    getSends: (req, res) => {
        res.status(200).send(sends)
    },
    deleteSend: (req, res) => {
        let index = sends.findIndex(elem => elem.id === +req.params.id)
        sends.splice(index, 1)
        res.status(200).send(sends)
    },
    addSend: (req, res) => {
        let { videoURL, title, grade, location, area, notes } = req.body
        let newSend = {
            id: globalId,
            videoURL,
            title,
            grade,
            location,
            area,
            notes
        }
        sends.push(newSend)
        globalId++
        res.status(200).send(sends)
    }
    // editSend: (req, res) => {
    //     let { notes } = req.params
    //     let { type } = req.body
    //     let index = sends.findIndex(elem => +elem.id === +id)

    //     need to finish writing out this functionality
        
    // }
}
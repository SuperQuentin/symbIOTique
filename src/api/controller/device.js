const Device = require('../../model/device')
const mongoose = require('mongoose')

module.exports.all = (req,res) => 
{
    Device.find({}, (err, doc) => {
        if (doc) {
            console.log('From db : ' + doc)
            res.status(200).json({
                devices : doc
            })
        }
        else {
            res.status(404).json({
                error: 'devices not found'
            })
        }

        if (err) {
            console.error(err)
            if(err){
                res.status(500).json({error: 'an error occurred during the research'})
            }
        }
    })
}

module.exports.find = (req,res) => 
{
    const id = req.params.id

    Device.findById(id, (err, doc) => {
        if (doc) {
            console.log('From db : ' + doc)
            res.status(200).json({
                device : doc
            })
        }
        else {
            res.status(404).json({
                error: 'device not found'
            })
        }

        if (err) {
            console.error(err)
            if(err){
                res.status(500).json({error: 'an error occurred during the research'})
            }
        }
    })
}

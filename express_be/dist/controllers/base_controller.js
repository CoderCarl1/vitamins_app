//models
const Base = require('../models/base_model')
// const baseUtils = require('../utils/base_utils')
//creating entry

exports.createEntry = async (req, res) => {
    try {
        const newBase = await new Base()
        console.log(req.body.entry)
        newBase.entry = req.body.entry
        console.log('newbase', {newBase})
        await newBase.save()

        console.log('=================================')
        console.log('success')
        res.status(200).json({ newBase })
    } catch (err) {
        console.group('Error')
        console.warn('we gotses an error. Sad Face')
        console.error(err.message)
        console.groupEnd('Error')
        res.status(400).json(err)
    }
}

//returning hardcoded entry
exports.hardEntry = async (req, res) => {
    try {
        const str = 'hello this is the string'
        res.status(200).send(str)
    } catch (err) {
        console.group('Error')
        console.warn('we gotses an error. Sad Face')
        console.error(err.message)
        console.groupEnd('Error')
        res.status(400).json(err)
    }
}
exports.getEntry = async (req, res) => {
  try {
    let _id = req.params.id
    let entry = await Base.findById(_id)
    console.log('yay')
    res.status(200).send(entry)
  } catch (err) {
      console.group('Error')
      console.warn('we gotses an error. Sad Face')
      console.error(err.message)
      console.groupEnd('Error')
      res.status(400).json(err)
  }
}
//imports
import express, {Application, Request, Response, NextFunction} from 'express';
export const router = express.Router()
//controllers
const vitaminController = require('../controllers/vitamin_controller.js')

//return all vitamins
router.get('/api/vitamins', vitaminController.all_vitamins)
//return 1 vitamin
router.get('/api/vitamins/:id', vitaminController.get_vitamin)
//create 1 vitamin
router.post('/api/vitamins/new', vitaminController.create_vitamin)
//edit vitamin
router.post('/api/vitamins/:id/edit', vitaminController.edit_vitamin)
//delete vitamin
router.delete('/api/vitamins/:id/delete', vitaminController.delete_vitamin)

// module.exports = router

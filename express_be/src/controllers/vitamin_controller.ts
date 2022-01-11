const Vitamin = require('../models/vitamin_model')

async function all_vitamins(res: Response){
  try{
    const vitamins = await Vitamin.findAll()
    res.status(200).send(vitamins)

  } catch (err){
    res.status(404).send(err.message)
  }

}

async function get_vitamin(req: Request, res: Response){
  try{
    const item: 
  } catch(err){
    res.status(404).send(err.message)
  }

}

async function create_vitamin(req: Request, res: Response){

}

async function edit_vitamin(req: Request, res: Response){

}

async function delete_vitamin(req: Request, res: Response){

}
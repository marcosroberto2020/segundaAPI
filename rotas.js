import express from 'express'

const router = express.Router()

router.get('/usuarios', (req,res) =>{

 res.send('ok.. deu bom')

})
export default router
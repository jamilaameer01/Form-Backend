const express = require('express')
const {
     createForm,
     getForm, 
     getForms,
     deleteForm,
     updateForm
    } = require('../controllers/mainformController')


const router = express.Router()



router.get('/', getForms)
router.get('/:id', getForm )
router.post('/', createForm) 
router.delete('/:formId', deleteForm)
router.put('/update/:id', updateForm)


module.exports = router
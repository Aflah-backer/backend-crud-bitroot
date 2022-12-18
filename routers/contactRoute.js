import express from 'express'
import { convertingToCsv, createContact, deleteContact, getAllContacts, getSingleContact, updateContact } from '../controllers/contactController.js'

const router = express.Router()
//create
router.post('/create-contact',createContact)
//getall
router.get('/get-all-contact',getAllContacts)
//getsingle
router.get('/get-single-contact/:name', getSingleContact)
//delete
router.delete('/delete-contact/:id', deleteContact)
//update
router.put('/update-conatct/:id', updateContact)
//to csv
router.get('/toCsv',convertingToCsv)


export default router
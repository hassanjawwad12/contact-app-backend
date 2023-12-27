const express = require('express');
const router = express.Router();

const {getContact,CreateContact,getContacts,DeleteContact, UpdateContact}=require('../Controller/ContractController');

router.route('/').get(getContacts).post(CreateContact);

router.route('/:id').get(getContact).put(UpdateContact).delete(DeleteContact);

//router.route('/').post(CreateContact);

//router.route('/:id').put(UpdateContact);

//router.route('/:id').delete(DeleteContact);

module.exports = router;
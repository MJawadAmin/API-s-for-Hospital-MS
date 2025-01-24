import express from "express";
import { createUser, deletData, getAll, getOne, updateData } from '../controllers/patientcontrolls.js';

const route = express.Router();
route.post('/create', createUser);
route.get('/getall', getAll)
route.get('/getone/:id', getOne)
route.put('/updateUser/:id', updateData)
route.delete('/deletedata/:id', deletData)

export default route;

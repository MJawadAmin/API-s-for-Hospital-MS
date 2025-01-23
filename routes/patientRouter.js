import express from "express";
import { createUser, getAll, getOne } from '../controllers/patientcontrolls.js';

const route = express.Router();
route.post('/create', createUser);
route.get('/getall', getAll)
route.get('/getone/:id', getOne)

export default route;

import express from "express";
import { createUser, getAll } from '../controllers/patientcontrolls.js';

const route = express.Router();
route.post('/create', createUser);
route.get('/getall', getAll)

export default route;

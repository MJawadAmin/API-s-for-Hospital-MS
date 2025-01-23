import express from "express";
import { createUser } from '../controllers/patientcontrolls.js';

const route = express.Router();
route.post('/create', createUser);

export default route;

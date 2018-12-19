import express from 'express';
import admin from '../controller/admin/admin.js'

const router = express.Router();
/* GET users listing. */
router.post('/register',admin.register);
router.post('/login',admin.login);
export default router

import express from 'express';
import dict from '../controller/init/dict.js'

const router = express.Router();
/* GET users listing. */
router.post('/getdict',dict.getdict);

export default router

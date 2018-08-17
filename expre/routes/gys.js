import express from 'express';
import gys from '../controller/gys/gys.js'

const router = express.Router();
/* GET users listing. */
router.post('/add',gys.add);
export default router

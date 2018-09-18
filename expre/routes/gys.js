import express from 'express';
import gys from '../controller/gys/gys.js'

const router = express.Router();
/* GET users listing. */
router.post('/add',gys.add);
router.post('/limit',gys.limit);
router.post('/updateone',gys.updateone);
router.post('/deletebyid',gys.deletebyid);
export default router

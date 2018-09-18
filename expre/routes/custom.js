import express from 'express';
import custom from '../controller/custom/custom.js'

const router = express.Router();
/* GET users listing. */
router.post('/add',custom.add);
router.post('/limit',custom.limit);
router.post('/updateone',custom.updateone);
router.post('/deletebyid',custom.deletebyid);
export default router

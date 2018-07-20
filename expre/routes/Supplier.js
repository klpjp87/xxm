import express from 'express';
import supplier from '../controller/Supplier/Supplier.js'

const router = express.Router();
/* GET users listing. */
router.post('/add',supplier.add);
router.post('/findByMaterialId',supplier.findByMaterialId);
export default router

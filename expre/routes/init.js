import express from 'express';
import init from '../controller/init/init.js'

const router = express.Router();
/* GET users listing. */
router.post('/getindexmenu',init.getindexmenu);
router.post('/token',init.gettoken);
export default router

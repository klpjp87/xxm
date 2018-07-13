import express from 'express';
import user from '../controller/user/user'

const router = express.Router();
/* GET users listing. */
router.post('/save',user.save);
router.post('/limit',user.limit);
router.post('/count',user.count);
export default router

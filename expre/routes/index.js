'use strict';
import user from './user';
import supplier from './supplier'
import init from './init'
import gys from './gys'
//import user from './user';

export default app => {
  app.use('/user', user);
  app.use('/supplier',supplier);
  app.use('/init',init);
  app.use('/gys',gys);
}
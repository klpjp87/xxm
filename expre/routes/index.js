'use strict';
import user from './user';
import supplier from './supplier'
import init from './init'
//import user from './user';

export default app => {
  app.use('/user', user);
  app.use('/supplier',supplier);
  app.use('/init',init);
}
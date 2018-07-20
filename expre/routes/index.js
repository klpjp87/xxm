'use strict';
import user from './user';
import supplier from './supplier'
//import user from './user';

export default app => {
  app.use('/user', user);
  app.use('/supplier',supplier);
}
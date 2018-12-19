'use strict';
import supplier from './supplier'
import init from './init'
import gys from './gys'
import custom from './custom'
import admin from './admin'
import dict from './dict';

export default app => {
  app.use('/supplier',supplier);
  app.use('/init',init);
  app.use('/admin',admin);
  app.use('/gys',gys);
  app.use('/custom',custom);
  app.use('/dict',dict);
}
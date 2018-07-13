'use strict';
import user from './user';

//import user from './user';

export default app => {
  app.use('/user', user);
}
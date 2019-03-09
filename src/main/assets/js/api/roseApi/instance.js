import { createAPI } from '../util';
import config from '../config';

const baseUrl = {
  mock: ['https://www.easy-mock.com/mock/5c6ead0e37202863fa565925'],
  dev: ['http://localhost:7001'],
  production: ['https://www.easy-mock.com/mock/5c6ead0e37202863fa565925']
}[process.env.NODE_ENV === 'development' ? config.env : process.env.NODE_ENV];

export default createAPI(...baseUrl);

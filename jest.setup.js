import 'whatwg-fetch';
import 'setimmediate';
import { getEnvironments } from './src/helpers/getEnvironments';

require('dotenv').config({
    path: '.env.test'
});

jest.mock('./src/helpers/getEnvironments', () => ({
    getEnvironments: () => ({...process.env})
}));

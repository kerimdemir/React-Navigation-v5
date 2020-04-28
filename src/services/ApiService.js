/* eslint-disable camelcase */
import ajax from './AxiosService';
const API_URL = 'https://reactnative.dev';
const ApiService = function () {
  const getUser = () => {
    return ajax.get(API_URL + '/movies.json');
  };

  return {
    getUser,
  };
};

export default ApiService();

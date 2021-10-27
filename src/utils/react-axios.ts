import axios from 'axios';

axios.defaults.timeout = 120000;

enum AxiosMethod {
  get = 'get',
  post = 'post'
}

const request = async (method: AxiosMethod, url: string, data?: any) => {
  try {
    const res = await axios[method](url, data);
    return res.data;
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: 'error'
    };
  }
};

const get = async (url: string, params?: any) => {
  return request(AxiosMethod.get, url, params);
};

const post = async (url: string, data?: any) => {
  return request(AxiosMethod.post, url, data);
};

export { get, post };

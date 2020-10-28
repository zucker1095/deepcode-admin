import Vue from 'vue';

import axios from 'axios';

import {
  reqInter,
  resInter,
  errReqInter,
  errResInter,
} from './interceptors.js';

import { axiosConfig } from './axiosConfig.js';

const http = axios.create(axiosConfig);

//请求和响应拦截器
http.interceptors.request.use(reqInter, errReqInter);
http.interceptors.response.use(resInter, errResInter);

//封装请求格式
const decorRequest = (http, { url, method }) => (data) =>
  http[method](url, { data });

//挂载到vue实例上
Vue.prototype.$http = http;

export default http;

export { decorRequest };

export { codeMap } from './axiosConfig.js';

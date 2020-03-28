'use strict';

import baseApi from "lib/webapi.js";
import { Message } from 'element-ui';

class webapi extends baseApi {
  constructor() {
    super();
  }
  getEnvName() {
    let env = 'prod';
    let url = window.location.href;
    if (url.indexOf('localhost') > 0) {
      env = "inte"
    } else if (url.indexOf('192') > 0) {
      env = "me"
    }
    return env;
  }

  envUrl = {
    me: 'http://183.131.146.66:29080',
    inte: 'http://183.131.146.66:29080',
    prod: 'http://183.131.146.66:29080',
  };


  getDomainApi(type) {
    return this.env('envUrl')
  }

}

export default new webapi();
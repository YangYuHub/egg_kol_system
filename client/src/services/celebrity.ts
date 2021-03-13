import * as http from '../http/http';
import { request } from 'umi';
import qs from 'qs';
import axios from 'axios';
import { json } from 'express';

export type LoginParamsType = {
  username: string;
  password: string;
  mobile: string;
  captcha: string;
  type: string;
};

export type LoginType = {
  username: string;
  password: string;
};

export type KolParams = {
  page: number;
  per_page: number;
  search_words: string;
  search_key: string;
  country_id: string;
  category_id: string;
  product_type: string;
  lang: string;
  authed_at: string;
  sex: string;
  promotion: string;
  fans_num: { min: null; max: null };
  video_prediction_play_num: { min: null; max: null };
  community: string;
  teamwork_fee: { min: null; max: null };
};
export type CelebrityParamType = {
  id: number;
  channel_id: string;
  country: string;
  fans_num: number;
  grade: number;
  head_img: string;
  is_auth: number;
  is_complete: boolean;
  is_cop: number;
  is_mcn: number;
  language: string;
  name: string;
  user_id: number;
  user_type: string;
  video_prediction_play_num: number;
};
export type CelebrityResultType = {
  channel_id: string;
  country: string;
  fans_num: number;
  grade: number;
  head_img: string;
  id: number;
  is_auth: number;
  is_complete: true;
  is_cop: number;
  is_mcn: number;
  language: string;
  name: string;
  user_id: number;
  user_type: string;
  video_prediction_play_num: number;
};

export function kol_login(params: LoginType) {
  return http.post('/admin_api/login', params);
}

export function kol_list(params: KolParams) {
  return http.get('/admin_api/kol/serarch', params);
}

export function kol_baseinfo(params: string) {
  console.log(params);
  const s = { user_id: Number(params) };
  // console.log(qs.stringify(s));
  // return http.post('admin_api/kol/baseinfo', qs.stringify(s));
  const res = new FormData();
  res.append('user_id', params);

  var myDataObj = s;
  var formData = new FormData();
  for (var key in myDataObj) {
    formData.append(key, myDataObj[key]);
  }

  console.log(formData);
  return http.post('admin_api/kol/baseinfo', qs.stringify({ user_id: params }));
  const options: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-access-token':
        ' eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6InNoaW5nMDIifQ.eyJpc3MiOiJzdXNwbi5jb20iLCJhdWQiOiJzdXNwbi5jb20iLCJqdGkiOiJzaGluZzAyIiwiaWF0IjoxNjE1NTE3MDk2LCJ1aWQiOjE2MH0.VnnCjyE6QP08lm8EUK9oN55E8_FtwfaFcVWJxrO7u9Q',
    },
    data: qs.stringify({ user_id: params }),
    url: 'https://api.kolzhipin.com/admin_api/kol/baseinfo',
  };
  return axios(options);
}

export function login(params: LoginType) {
  return request<API.LoginStateType>('api/public/login', {
    method: 'POST',
    data: params,
  });
}
export function getKols(params: KolParams) {
  return request<API.AppResponse<CelebrityResultType[]>>('api/public/getKols', {
    method: 'POST',
    data: params,
  });
}

export function addCelebrity(params: CelebrityParamType) {
  return request<API.LoginStateType>('api/celebrity/add', {
    method: 'POST',
    data: params,
  });
}

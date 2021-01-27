import axios from '@/utils/request'
import { AxiosRequestConfig } from 'axios'

// 单个视频文件上传
export const videoUpload = (p:any, source:any, progressFn:any) =>
  axios.post('/api/upload/file/single', p, { cancelToken: source.token, onUploadProgress: progressFn })
// 图片上传
export const imgUpload = (p:any, source:any, progressFn:any) =>
  axios.post('/api/upload/file/img', p, { cancelToken: source.token, onUploadProgress: progressFn })
export const upload = (p:any, source:any, progressFn:any) =>
  axios.post('/demo/upload', p, { cancelToken: source.token, onUploadProgress: progressFn })

import {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import handleErrorRes from '@libs/http/http.handle.error'
import injectTokenHeader from '@libs/http/http.inject.token'

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => injectTokenHeader(config)
const onRequestError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error)

const onResponse = (response: AxiosResponse): AxiosResponse => response
const onResponseError = (error: AxiosError): Promise<AxiosError> => handleErrorRes(error)

export default function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
	axiosInstance.interceptors.request.use(onRequest, onRequestError)
	axiosInstance.interceptors.response.use(onResponse, onResponseError)
	return axiosInstance
}
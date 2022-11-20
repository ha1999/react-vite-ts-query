import { AxiosRequestConfig } from 'axios'

export default function injectTokenHeader(config: AxiosRequestConfig){
	const token = localStorage.getItem('accessToken')
	config.headers = config.headers ?? {}
	config.headers.Authorization = token ? `Bearer ${token}` : ''
	return config
}
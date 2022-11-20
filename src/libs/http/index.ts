import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import http_instance from '@libs/http/http.instance'

class HttpApp {

	private instance: AxiosInstance | null = null

	private get http(): AxiosInstance {
		return this.instance != null ? this.instance : this.initHttp()
	}

	initHttp() {
		this.instance = http_instance
		return http_instance
	}


	request<T = unknown, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
		return this.http.request<T, R>(config)
	}

	get<T = unknown, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>{
		return this.http.get<T, R>(url, config)
	}

	post<T = unknown, R = AxiosResponse<T>>(url: string, data: object, config?: AxiosRequestConfig): Promise<R>{
		return this.http.post<T, R>(url, data, config)
	}

	put<T = unknown, R = AxiosResponse<T>>(url: string, data: object, config: AxiosRequestConfig): Promise<R>{
		return this.http.put<T, R>(url, data, config)
	}

	delete<T = unknown, R = AxiosResponse<T>>(url: string, config: AxiosRequestConfig): Promise<R>{
		return this.http.delete<T, R>(url, config)
	}

	patch<T = unknown, R = AxiosResponse<T>>(url: string, data: object, config: AxiosRequestConfig): Promise<R>{
		return this.http.patch<T, R>(url, data, config)
	}
}


export default Object.freeze(new HttpApp())
import axios from 'axios'
import setupInterceptorsTo from '@libs/http/http.interceptors'

export default setupInterceptorsTo(axios.create({
	baseURL: 'https://some-domain.com/api/',
	timeout: 5000,
	headers: {'X-Custom-Header': 'foobar'},
	withCredentials: true,
	transformResponse: data => {
		return data.data
	}
}))
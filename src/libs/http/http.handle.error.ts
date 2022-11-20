import { AxiosError } from 'axios'

enum StatusCode {
    Unauthorized = 401,
    Forbidden = 403,
    TooManyRequests = 429,
    InternalServerError = 500,
}

export default function handleErrorRes(error: AxiosError): Promise<AxiosError> {
	const { status } = error

	switch (status) {
	case StatusCode.InternalServerError: {
		// Handle InternalServerError
		break
	}
	case StatusCode.Forbidden: {
		// Handle Forbidden
		break
	}
	case StatusCode.Unauthorized: {
		// Handle Unauthorized
		break
	}
	case StatusCode.TooManyRequests: {
		// Handle TooManyRequests
		break
	}
	}

	return Promise.reject(error)
}
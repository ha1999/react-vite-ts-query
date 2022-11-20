class HttpHome {
	prefix: string
	constructor(prefix: string){
		this.prefix = prefix
	}

	async listData(): Promise<number[]>{
		return Promise.resolve([1, 2, 3, 4, 5])
	}
}

const http_home = new HttpHome('/home')

export default Object.freeze(http_home)
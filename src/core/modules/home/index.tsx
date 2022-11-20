import {
	// useQueryClient,
	useQuery
} from '@tanstack/react-query'

import homeHttp from '@modules/home/home.http'
import {_} from '@libs/root'

export default function HomeModule(){
	// const queryClient = useQueryClient()
	const {data} = useQuery({ queryKey: ['todos'], queryFn: homeHttp.listData })
	
	return (
		<div>
			<h1>First components for Home Page</h1>
			<ul>
				{
					_.map(data, num => <li key={num}>{num}</li>)
				}
			</ul>
		</div>
		
	)
}
import './App.css'
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import AppModal from '@components/AppModal'
import HomePage from '@pages/Home'

const queryClient = new QueryClient()

function App() {

	return (
		<div className="App">
			<QueryClientProvider client={queryClient}>
				<AppModal />
				<HomePage />
			</QueryClientProvider>
		</div>
	)
}

export default App

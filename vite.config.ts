import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ 
				find: '@modules', 
				replacement: path.resolve(__dirname, 'src/core/modules') 
			},
			{ 
				find: '@pages', 
				replacement: path.resolve(__dirname, 'src/pages') 
			},
			{ 
				find: '@components', 
				replacement: path.resolve(__dirname, 'src/components') 
			},
			{ 
				find: '@libs', 
				replacement: path.resolve(__dirname, 'src/libs') 
			},
			{ 
				find: '@', 
				replacement: path.resolve(__dirname, 'src') 
			}
		]
	}
})

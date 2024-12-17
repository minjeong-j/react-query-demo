import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';	// Devtools 임포트
import Post from './Post';
import CreatePost from './CreatePost';

const queryClient = new QueryClient();

function App() {
	return (
    	<QueryClientProvider client={queryClient}>
		<div>
			<h1>React Query 실습</h1>
			<Post />
			<CreatePost />
		</div>
        	<ReactQueryDevtools initialIsOpen={false} /> {/* Devtools 추가 */}
        </QueryClientProvider>
    );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider, QueryClient } from 'react-query';

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</QueryClientProvider>
	</React.StrictMode>
);

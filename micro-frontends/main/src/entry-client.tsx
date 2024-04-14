import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppRouters } from '@routers';
import './index.css';

ReactDOM.hydrateRoot(
	document.getElementById('root') as HTMLElement,
	<React.StrictMode>
		<BrowserRouter>
			<AppRouters />
		</BrowserRouter>
	</React.StrictMode>
);

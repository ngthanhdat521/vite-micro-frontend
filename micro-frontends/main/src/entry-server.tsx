import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppRouters } from '@routers';
import './index.css';

export function render() {
	const html = ReactDOMServer.renderToString(
		<React.StrictMode>
			<StaticRouter location=''>
				<AppRouters />
			</StaticRouter>
		</React.StrictMode>
	);
	return { html };
}

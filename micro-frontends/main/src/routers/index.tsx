import { Routes, Route, Navigate } from 'react-router-dom';
import { ProductPage } from '@pages/products';
import { ProductDetailPage } from '@pages/product-details';
import { SignInPage } from '@pages/sign-in';
import App from '@/App';
import { NotFoundPage } from '@/pages/404';
import { MyCartPage } from '@/pages/my-cart';

export const AppRouters = () => {
	return (
		<Routes>
			<Route path="users" element={<App />}>
				<Route path="" element={<Navigate to='products' />} />
				<Route path="products" element={<ProductPage />} />
				<Route path="product/:id" element={<ProductDetailPage />} />
				<Route path="my-cart" element={<MyCartPage />} />
			</Route>
			<Route path="sign-in" element={<SignInPage />} />
			<Route path="404" element={<NotFoundPage />} />
			<Route path="*" element={<Navigate to='404' />} />
		</Routes>
	);
};

import { Routes, Route } from 'react-router-dom';
import { ProductPage } from '@pages/index';
import MasterPage from 'layouts/shared/master-page';
import { ProductDetailPage } from '@pages/product-details';
import { SignInPage } from '@pages/sign-in';

export const AppRouters = () => {
	return (
		<Routes>
			<Route path="/products" element={<ProductPage />} />
			<Route path="/" element={<ProductPage />} />
			<Route path="/product" element={<ProductDetailPage />} />
			<Route path="/sign-in" element={<SignInPage />} />
		</Routes>
	);
};

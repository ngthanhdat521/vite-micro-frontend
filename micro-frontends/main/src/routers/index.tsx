import { App } from '@/App';
import { Tracking } from '@/pages/tracking';
import { ModalProviders } from '@components/containers/providers';
import { NotFoundPage } from '@pages/404';
import { MyCartPage } from '@pages/my-cart';
import { ProductDetailPage } from '@pages/product-details';
import { ProductPage } from '@pages/products';
import { SignInPage } from '@pages/sign-in';
import { SignUpPage } from '@pages/sign-up';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRouters = () => {
	return (
		<ModalProviders>
			<Routes>
				<Route path="user" element={<App />}>
					<Route path="" element={<Navigate to="products" />} />
					<Route path="products" element={<ProductPage />} />
					<Route path="product/:id" element={<ProductDetailPage />} />
					<Route path="my-cart" element={<MyCartPage />} />
					<Route path="tracking" element={<Tracking />} />
				</Route>
				<Route path="" element={<Navigate to="sign-in" />} />
				<Route path="sign-in" element={<SignInPage />} />
				<Route path="sign-up" element={<SignUpPage />} />
				<Route path="404" element={<NotFoundPage />} />
				<Route path="*" element={<Navigate to="404" />} />
			</Routes>
		</ModalProviders>
	);
};

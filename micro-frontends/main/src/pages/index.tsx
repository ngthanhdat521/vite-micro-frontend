import React from 'react';

export const ProductPage: React.FC = () => {
	const products = [
		{
			id: '1',
			title: 'Basic Tee',
			price: 35,
			source: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
			color: 'Black',
		},
		{
			id: '2',
			title: 'White Tee',
			price: 35,
			source: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
			color: 'White',
		},
		{
			id: '3',
			title: 'Gray Tee',
			price: 35,
			source: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
			color: 'Gray',
		},
		{
			id: '4',
			title: 'Custom Tee',
			price: 35,
			source: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
			color: 'Pink',
		}
	];

	return (
		<div className="bg-white">
			<div className="">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900">
					Customers also purchased
				</h2>
				<div className="mt-6 grid grid-cols-4 gap-4">
					{products.map((products) => (
						<div className="group relative">
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
								<img
									src={products.source}
									alt="Front of men's Basic Tee in black."
									className="h-full w-full object-cover object-center lg:h-full lg:w-full bg-cover"
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-700">
										<a href="#">
											<span aria-hidden="true" className="absolute inset-0" />
											{products.title}
										</a>
									</h3>
									<p className="mt-1 text-sm text-gray-500">{products.color}</p>
								</div>
								<p className="text-sm font-medium text-gray-900">
									${products.price}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

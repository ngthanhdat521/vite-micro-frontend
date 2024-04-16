import { TextBox } from '@/components/containers/textboxes';
import { Button } from '@/components/presentationals/buttons/button';
import React from 'react';
import { useForm } from 'react-hook-form';

export const SignInPage = () => {
	const { handleSubmit, control } = useForm({
		defaultValues: {
			email: '',
			password: ''
		},
		mode: 'onChange'
	});

	return (
		<section className="w-full h-full flex justify-center items-center bg-gray-50 dark:bg-gray-900">
			<div className="grid grid-cols-12 w-3/5 gap-20">
				<div className="col-span-6">
					<img src="/remotely.svg" alt="My Happy SVG" />
				</div>
				<div className="col-span-6">
					<div className="w-full h-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Sign in to your account
							</h1>
							<form className="space-y-4 md:space-y-6" action="#">
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Your email
									</label>
									<TextBox
										control={control}
										name="email"
										type="email"
										rules={{
											required: true,
											pattern: {
												value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
												message: 'Email is invalid.'
											}
										}}
									/>
								</div>
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Password
									</label>
									<TextBox
										control={control}
										name="password"
										type="password"
										rules={{
											required: true,
											pattern: {
												value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*-._])[0-9a-zA-Z~!@#$%^&*-._]{10,}/,
												message: 'Password is invalid.'
											}
										}}
									/>
								</div>
								<div className="flex items-center justify-between">
									<div className="flex items-start">
										<div className="flex items-center h-5">
											<input
												id="remember"
												aria-describedby="remember"
												type="checkbox"
												className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
											/>
										</div>
										<div className="ml-3 text-sm">
											<label
												htmlFor="remember"
												className="text-gray-500 dark:text-gray-300"
											>
												Remember me
											</label>
										</div>
									</div>
									<a
										href="#"
										className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
									>
										Forgot password?
									</a>
								</div>
								<Button>Sign In</Button>
								<p className="text-sm font-light text-gray-500 dark:text-gray-400">
									Don’t have an account yet?{' '}
									<a
										href="#"
										className="font-medium text-primary-600 hover:underline dark:text-primary-500"
									>
										Sign up
									</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

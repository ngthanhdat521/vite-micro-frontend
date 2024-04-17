import React from 'react';
import { TextBox } from '@/components/containers/textboxes';
import { Button } from '@/components/presentationals/buttons/button';
import { useForm } from 'react-hook-form';
import { Test } from 'shared';

export const SignInPage = () => {
	const { handleSubmit, control } = useForm({
		defaultValues: {
			email: '',
			password: ''
		},
		mode: 'onChange'
	});

	const authenticate = (data: any) => {
		console.log(data);
	}

	return (
		<section className="w-full h-full flex justify-center items-center bg-gray-50 dark:bg-gray-900">
			<div className="flex items-center justify-center gap-20">
				<img className="w-[600px] h-[600px]" src="/remotely.svg" alt="My Happy SVG" />
				<div className="w-[500px]">
					<div className="w-full h-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 flex">
						<div className="w-full p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-8">
								Sign in to your account
							</h1>
							<form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(authenticate)}>
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
									Don’t have an account yet?
									<a
										href="#"
										className="ml-2 font-medium text-primary-600 hover:underline dark:text-primary-500"
									>
										Sign up
									</a>
								</p>
								<div className="relative flex justify-center">
									<div className="w-full h-[2px] absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-gray-300 z-10" />
									<div className="relative z-20 bg-white px-5">
										Or continue with
									</div>
								</div>
								<div className="grid grid-cols-2 gap-2">
									<button className="w-full border border-slate-200 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center gap-2">
										<img
											className="w-[20px] h-[20px]"
											src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-color-icon.svg"
										/>
										<span>Sign in with Google</span>
									</button>
									<button className="w-full bg-white hover:bg-gray-200 border border-slate-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center gap-2">
										<img
											className="w-[20px] h-[20px]"
											src="https://img.icons8.com/?size=30&id=62856&format=png"
										/>
										<span>Sign in with Git</span>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

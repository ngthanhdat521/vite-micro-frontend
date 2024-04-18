// import '../../no';
import React, { FC, useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, MapLayer } from 'react-leaflet';
import 'leaflet';
import 'leaflet-routing-machine';
import 'lrm-google';

declare const L: any;
var test = false;
export const Tracking: FC = () => {
	const handle = () => {
		const map = L.map('map').setView([15.9589499, 108.2772536, 11], 11);
		const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: 'Leaflet &copy; ' + mapLink + ', contribution',
			maxZoom: 18
		}).addTo(map);

		const taxiIcon = L.icon({
			iconUrl:
				'https://cdn.iconscout.com/icon/premium/png-256-thumb/car-top-view-7355712-6071962.png',
			iconSize: [70, 70]
		});

		const marker = L.marker([15.9589499, 108.2772536], { icon: taxiIcon }).addTo(map);

		map.on('click', function (e) {
			L.Routing.control({
				// waypoints: [L.latLng(28.238, 83.9956), L.latLng(e.latlng.lat, e.latlng.lng)]
				waypoints: [L.latLng(15.9589499, 108.2772536), L.latLng(16.008699, 108.219106)]
			})
				.on('routesfound', function (e) {
					const routes = e.routes;
					console.log(routes);

					e.routes[0].coordinates.forEach(function (coord, index) {
						setTimeout(function () {
							marker.setLatLng([coord.lat, coord.lng]);
						}, 100 * index);
					});
				})
				.addTo(map);
		});
	};

	useEffect(() => {
		if (!test) {
			console.log('ok', test);
			handle();
			test = true;
		}
	}, []);

	return (
		<div className="grid grid-cols-12 gap-10 mt-10 w-full h-[700px] ">
			<div className="col-span-9">
				<div className="w-full h-full relative">
					<div id="map" className="w-full h-full" />
					{/* <MapContainer
						ref={map}
						style={{ width: '100%', height: 700 }}
						center={[15.9589499, 108.2772536, 11]}
						zoom={13}
						scrollWheelZoom={false}
					>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Marker position={[15.9589499, 108.2772536, 11]}>
							<Popup>
								A pretty CSS3 popup. <br /> Easily customizable.
							</Popup>
						</Marker>
					</MapContainer> */}
				</div>
			</div>
			<div className="col-span-3">
				<div className="w-full flex gap-4 p-5 bg-gray-100 overflow-hidden space-y-1 mb-10 rounded-lg">
					<img
						className="w-[80px] h-[80px]"
						src="https://img.icons8.com/?size=80&id=114613&format=png"
					/>
					<div>
						<p className="text-xl font-medium mb-0">Estimated delivery date</p>
						<p className="text-base text-orange-600 mb-2">Tuesday, January 12, 2023</p>
						<p className="text-sm mb-0 text-gray-400">
							Delivery by Express - SPX Express
						</p>
					</div>
				</div>
				<ol className="w-full p-5 bg-gray-100 overflow-hidden space-y-8 rounded-lg">
					<li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-indigo-600 after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5">
						<a
							href="https://pagedone.io/"
							className="flex items-center font-medium w-full  "
						>
							<span className="w-8 h-8 bg-indigo-600 border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
								<svg
									className="w-5 h-5 stroke-white"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M5 12L9.28722 16.2923C9.62045 16.6259 9.78706 16.7927 9.99421 16.7928C10.2014 16.7929 10.3681 16.6262 10.7016 16.2929L20 7"
										stroke="stroke-current"
										strokeWidth="1.6"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="my-path"
									/>
								</svg>
							</span>
							<div className="block">
								<h4 className="text-lg  text-indigo-600">Step 1</h4>
								<span className="text-sm">The order is prepared.</span>
							</div>
						</a>
					</li>
					<li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5">
						<a className="flex items-center font-medium w-full  ">
							<span className="w-8 h-8 bg-indigo-50  border-2 border-indigo-600 rounded-full flex justify-center items-center mr-3 text-sm text-indigo-600 lg:w-10 lg:h-10">
								2
							</span>
							<div className="block">
								<h4 className="text-lg  text-indigo-600">Step 2</h4>
								<span className="text-sm">The order is transported into the storage.</span>
							</div>
						</a>
					</li>
					<li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5">
						<a className="flex items-center font-medium w-full  ">
							<span className="w-8 h-8 bg-indigo-50  border-2 border-indigo-600 rounded-full flex justify-center items-center mr-3 text-sm text-indigo-600 lg:w-10 lg:h-10">
								3
							</span>
							<div className="block">
								<h4 className="text-lg  text-indigo-600">Step 3</h4>
								<span className="text-sm">The Order is at Ho Chi Minh City.</span>
							</div>
						</a>
					</li>
					<li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5">
						<a className="flex items-center font-medium w-full  ">
							<span className="w-8 h-8 bg-indigo-50  border-2 border-indigo-600 rounded-full flex justify-center items-center mr-3 text-sm text-indigo-600 lg:w-10 lg:h-10">
								4
							</span>
							<div className="block">
								<h4 className="text-lg  text-indigo-600">Step 4</h4>
								<span className="text-sm">The Order is at Vung Tau City.</span>
							</div>
						</a>
					</li>
					<li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5">
						<a className="flex items-center font-medium w-full  ">
							<span className="w-8 h-8 bg-indigo-50  border-2 border-indigo-600 rounded-full flex justify-center items-center mr-3 text-sm text-indigo-600 lg:w-10 lg:h-10">
								5
							</span>
							<div className="block">
								<h4 className="text-lg  text-indigo-600">Step 5</h4>
								<span className="text-sm">The Order was at Da Nang City</span>
							</div>
						</a>
					</li>
					<li className="relative flex-1 ">
						<a className="flex items-center font-medium w-full  ">
							<span className="w-8 h-8 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-10 lg:h-10">
								6
							</span>
							<div className="block">
								<h4 className="text-lg  text-gray-900">Step 6</h4>
								<span className="text-sm">The Order will be delivered now.</span>
							</div>
						</a>
					</li>
				</ol>
			</div>
		</div>
	);
};

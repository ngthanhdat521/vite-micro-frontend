import React, { FC } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export const Tracking: FC = () => {
	return (
		<div className='grid grid-cols-12 gap-10 mt-10'>
			<div className='col-span-7 overflow-hidden'>
				<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={[51.505, -0.09]}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				</MapContainer>
			</div>
			<div className='col-span-5'>1</div>
		</div>
	);
};

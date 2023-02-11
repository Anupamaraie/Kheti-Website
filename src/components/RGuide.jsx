import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function GoogleMap() {
	useEffect(() => {
		const ifameData = document.getElementById("iframeId");
		const lat = 28.4831;
		const lon = 80.923029;
		ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
	});
	return (

		<div class="max-w-sm w-full lg:max-w-full rounded shadow-lg pt-5">
			<iframe id="iframeId" height="500px" width="100%"></iframe>
			<div class="px-6 py-0">
				<div class="font-bold text-xl mb-2 mt-5">Enter The Plant Name</div>
				<p class="text-gray-700 text-base pt-0">
					The plant available in different regions will be pin pointed in the map.
				</p>
			</div>
			<div class="flex">
				<div class="mb-3 xl:w-96">
					<div class="input-group flex items-stretch w-full ml-4 pt-3">
						<input
							type="search"
							class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-500 focus:bg-white focus:border-gray-500 focus:outline-none"
							placeholder="Search"
							aria-label="Search"
							aria-describedby="button-addon2"
						/>

                        <Link to="">
						<button
							class="btn inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-green-500  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gren-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
							type="button"
							id="button-addon2"
						>
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="search"
								class="w-4"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path
									fill="currentColor"
									d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
								></path>
							</svg>
						</button>
                        </Link>
					</div>
				</div>
			</div>
		</div>
	);
}
export default GoogleMap;
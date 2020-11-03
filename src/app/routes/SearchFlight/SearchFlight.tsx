import React from "react";

function SearchFlight() {
	return (
		<div>
			<p>Welcome to your web check-in</p>
			<form>
				<input
					type="text"
					placeholder="Flight #"
					data-test-id="flightNumber"
				/>
				<input
					type="text"
					placeholder="Last Name"
					data-test-id="lastName"
				/>
				<button type="submit">Search Flight</button>
			</form>
		</div>
	);
}

export default SearchFlight;

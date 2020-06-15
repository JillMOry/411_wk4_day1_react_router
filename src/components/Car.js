import React from "react";
import cars from "../cars.json";
import { Container, Paper, Chip } from "@material-ui/core";

const Car = (props) => {
	const id = props.match.params.id;
	let car = cars.find((car) => car.id === id);

	return (
		<div>
			<Container maxWidth="md">
				<Paper elevation={3}>
					<h2>{car.Name}</h2>
				</Paper>
			</Container>
		</div>
	);
};

export default Car;

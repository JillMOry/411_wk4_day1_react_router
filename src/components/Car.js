import React from "react";
import cars from "../cars.json";
import { Container, Paper, Chip } from "@material-ui/core";

const Car = (props) => {
	const id = props.match.params.id;
	const getCar = cars.find((x) => x.id == id);

	return (
		<div className="car-container">
			<Container maxWidth="sm">
				<Paper className="car-container" className="car-paper">
					<h2>{getCar.Name.toUpperCase()}</h2>
					{Object.keys(getCar).map((key, idx) => {
						return <Chip label={`${key}: ${getCar[key]}`}></Chip>;
					})}
				</Paper>
			</Container>
		</div>
	);
};

export default Car;

import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<AppBar position="relative">
			<Toolbar>
				<IconButton color="inherit">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" style={{ flexGrow: "1" }}>
					FakeCars.com
				</Typography>
				<ul className="nav-list">
					<Link to="/About">
						<li className="nav-list-item">About</li>
					</Link>
					<Link to="/Home">
						<li className="nav-list-item">Home</li>
					</Link>
				</ul>
			</Toolbar>
		</AppBar>
	);
};

export default Navigation;

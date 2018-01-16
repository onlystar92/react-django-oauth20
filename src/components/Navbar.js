import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import GoogleLoginButton from "../containers/GoogleLoginButtonContainer";
import GoogleLogoutButton from "../containers/GoogleLogoutButtonContainer";

class Navbar extends Component {
	navbarLinks() {
		if (this.props.auth.isAuthenticated) {
			return [
				<li className="nav-item" key="logout-btn">
					<a className="nav-link" href="#">
						<GoogleLogoutButton />
					</a>
				</li>,
				<li className="nav-item" key="secret">
					<NavLink to="/secret" exact className="nav-link">
						Secret
					</NavLink>
				</li>
			];
		}
		return [
			<li className="nav-item" key="login-btn">
				<a className="nav-link" href="#">
					<GoogleLoginButton />
				</a>
			</li>
		];
	}

	render() {
		return (
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
				<button
					className="navbar-toggler navbar-toggler-right"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<NavLink className="nav-link" to="/">
								Home
							</NavLink>
						</li>
						{this.navbarLinks()}
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
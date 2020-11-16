import React from "react";
import FormInput from "../FormInput";
import CustomButton from "../../components/custom-button";
import "./Login.scss";

export default class Login extends React.PureComponent {
	constructor() {
		super();
		this.state = {
			email: "",
			password: ""
		};
	}

	handleChange = e => {
		let { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.setState({ email: "", password: "" });
	};

	render() {
		const { email, password } = this.state;

		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={email}
						label="Email"
						onChange={this.handleChange}
						required
					/>
					<FormInput
						name="password"
						type="password"
						value={password}
						label="Password"
						onChange={this.handleChange}
						required
					/>
					<CustomButton type="submit">Sign In</CustomButton>
				</form>
			</div>
		);
	}
}

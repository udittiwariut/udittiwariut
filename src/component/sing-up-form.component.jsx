import { useState, useContext } from "react";
import {
	createAuthWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "./../utlis/firebase/utls-firebase";
import { UserContext } from "../context/userContext";
import FormInput from "./form-input.compnent";

const formFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SingUpForm = () => {
	const [formField, setformField] = useState(formFields);
	const { displayName, email, password, confirmPassword } = formField;

	const { setCurrentUser } = useContext(UserContext);

	const submitHandler = async (e) => {
		e.preventDefault(e);

		const { email, password } = e.target;

		if (e.confirmPassword !== e.password) {
			alert("Password does not macth");
		}
		try {
			const { user } = await createAuthWithEmailAndPassword(
				email.value,
				password.value
			);

			await createUserDocumentFromAuth(user, { displayName });

			setCurrentUser(user);
		} catch (error) {
			console.log(error);
		}
	};

	const changeHandler = (e) => {
		const { name, value } = e.target;

		setformField({ ...formField, [name]: value });
	};

	return (
		<div>
			<h1>Sing up with your email and password</h1>
			<form onSubmit={submitHandler}>
				<FormInput
					label="Display Name"
					type="text"
					required
					onChange={changeHandler}
					name="displayName"
					value={displayName}
				/>

				<FormInput
					label="Email"
					type="email"
					required
					onChange={changeHandler}
					name="email"
					value={email}
				/>

				<FormInput
					label="Password"
					type="password"
					onChange={changeHandler}
					required
					name="password"
					value={password}
				/>

				<FormInput
					label="Confirm Password"
					type="password"
					required
					onChange={changeHandler}
					name="confirmPassword"
					value={confirmPassword}
				/>
				<button type="submit">Sing-up</button>
			</form>
		</div>
	);
};

export default SingUpForm;

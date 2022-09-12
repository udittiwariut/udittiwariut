import { async } from "@firebase/util";
import { useContext, useState } from "react";
import { UserContext } from "./../context/userContext";
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	loginWithEmailAndPassword,
} from "./../utlis/firebase/utls-firebase";
import FormInput from "./form-input.compnent";
import GoogleButton from "react-google-button";

const formFields = {
	email: "",
	password: "",
};

const SingInForm = () => {
	const [formField, setformField] = useState(formFields);
	const { email, password } = formField;

	const { setCurrentUser } = useContext(UserContext);

	const submitHandler = async (e) => {
		e.preventDefault(e);

		const { email, password } = e.target;

		if (!email || !password) {
			alert("Please enter your email & password");
		}
		try {
			const { user } = await loginWithEmailAndPassword(
				email.value,
				password.value
			);
			setCurrentUser({ user });
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("Wrong password");

					break;
				case "auth/user-not-found":
					alert("no user found with this cradentialss");
					break;

				default:
					console.log("log in susscessfull");
			}
		}
	};

	const SingInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();

		await createUserDocumentFromAuth(user);
	};

	const changeHandler = (e) => {
		const { name, value } = e.target;

		setformField({ ...formField, [name]: value });
	};

	return (
		<div>
			<h1>Sing in with your email and password</h1>
			<form onSubmit={submitHandler}>
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
				<button
					style={{
						backgroundColor: "#04AA6D",
						color: "white",
						padding: "14px 20px",
						margin: "8px 0",
						border: "none",
						cursor: "pointer",
						width: "240px",
						opacity: " 0.9",
					}}
					type="submit"
				>
					Sing-up
				</button>
				<GoogleButton onClick={SingInWithGoogle} />
				{/* by default button are of submit type */}
			</form>
		</div>
	);
};

export default SingInForm;

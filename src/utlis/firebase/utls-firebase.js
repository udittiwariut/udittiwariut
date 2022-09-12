import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithRedirect,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBoVbNfQSqpsrVx67kHJGPiidCM1io1OqM",
	authDomain: "r-clothing-db.firebaseapp.com",
	projectId: "r-clothing-db",
	storageBucket: "r-clothing-db.appspot.com",
	messagingSenderId: "830215171192",
	appId: "1:830215171192:web:a62c133cccd53a62a4518d",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();

// Creating a database to store shop item

export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
	const collectionRef = collection(db, collectionKey);

	const batch = writeBatch(db);

	objectToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());

		batch.set(docRef, object);
	});

	await batch.commit(() => console.log("Done"));
};

export const getCategoryAndDocument = async () => {
	const data = {};
	const collectionRef = collection(db, "cetagories");
	const q = query(collectionRef);

	const querySnapshort = await getDocs(q);

	querySnapshort.docs.forEach((docSnapShort) => {
		const { title, items } = docSnapShort.data();
		data[title.toLowerCase()] = items;
	});
	return data;
};
//Creating a auth for user
export const auth = getAuth();

const googleprovider = new GoogleAuthProvider();

googleprovider.setCustomParameters({
	prompt: "select_account",
});

export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleprovider);
export const singInWithGoogleRedriect = () =>
	signInWithRedirect(auth, googleprovider);

export const createUserDocumentFromAuth = async (userAuth, additionInfo) => {
	const userDocRef = doc(db, "User", userAuth.uid);

	const snapShort = await getDoc(userDocRef);

	console.log(snapShort);

	if (!snapShort.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionInfo,
			});
		} catch (error) {
			console.log("Status:Failed", error.message);
		}
	}
};

export const createAuthWithEmailAndPassword = async (email, password) => {
	const user = await createUserWithEmailAndPassword(auth, email, password);
	return user;
};

export const loginWithEmailAndPassword = async (email, password) => {
	return await signInWithEmailAndPassword(auth, email, password);
};

export const singOutUser = async () => {
	return await signOut(auth);
};

export const authStage = async (callback) => {
	await onAuthStateChanged(auth, callback);
};

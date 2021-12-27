import { useState, useEffect } from 'react';
import useAxios from './useAxios';
import initializeAuthentication from '../components/pages/Authentication/firebase/firebase.init';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
	updateProfile,
	getIdToken,
	signOut,
} from 'firebase/auth';

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState(null);
	const [isAdmin, setIsAdmin] = useState(false);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [token, setToken] = useState('');
	const { client } = useAxios();

	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();

	// register user
	const handleRegisterUser = (name, email, password, location, navigate) => {
		console.log(email, password);
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				setError('');
				// updating name
				updateProfile(auth.currentUser, {
					displayName: name,
				}).then(() => {});
				console.log(result.user);

				// // saving data to the database
				// saveUser(email, name, 'POST');

				// // TODO: fix redirect
				const redirectURI = location.state?.from?.pathname || '/';
				navigate(redirectURI);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	// login user
	const handleLoginUser = (email, password, location, navigate) => {
		setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				setError('');
				console.log(result.user);

				const redirectURI = location.state?.from?.pathname || '/';
				navigate(redirectURI);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	// login user with google
	const handleGoogleSignIn = (location, navigate) => {
		setIsLoading(true);
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				setError('');
				const user = result.user;
				// saveUser(user.email, user.displayName, 'PUT');

				const redirectURI = location.state?.from?.pathname || '/home';
				navigate(redirectURI);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	// handling auth state change
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);

				// getting jwt token here
				getIdToken(user).then((idToken) => {
					setToken(idToken);
				});
			} else {
				setUser(null);
			}
			setIsLoading(false);
		});

		return () => unsubscribe;
	}, [auth]);

	// save user to the database according to the given method
	const saveUser = (email, displayName, method) => {
		const registeredUser = { email, displayName };

		switch (method) {
			case 'POST':
				client.post('/user', registeredUser).then((response) => {
					console.log(response.data);
				});
				break;
			case 'PUT':
				client.put('/user', registeredUser).then((response) => {
					console.log(response.data);
				});
				break;
			default:
				break;
		}
	};

	// checking if the user is admin or not
	// useEffect(() => {
	// 	if (user) {
	// 		setIsLoading(true);
	// 		client.get(`/user/${user.email}`).then((response) => {
	// 			const adminStatus = response.data.admin;
	// 			setIsAdmin(adminStatus);
	// 			setIsLoading(false);
	// 		});
	// 	}
	// }, [user]);

	// signout user
	const handleSignOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				setError('');
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return {
		user,
		isAdmin,
		error,
		setError,
		token,
		isLoading,
		handleRegisterUser,
		handleLoginUser,
		handleGoogleSignIn,
		handleSignOut,
	};
};

export default useFirebase;

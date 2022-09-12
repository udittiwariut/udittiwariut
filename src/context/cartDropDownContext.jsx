import { createContext, useEffect, useState } from "react";

export const cartContext = createContext({
	isCartOpen: false,
	setisCartOpen: () => {},
	cartItem: [],
	setCartItem: () => {},
	addItemToCart: () => {},
	cartCount: 0,
	removeItemFromCart: () => {},
	cartTotal: [],
});

const addCartItem = (cartItem, productToAdd) => {
	const existingCartItem = cartItem.find((item) => item.id === productToAdd.id);

	if (existingCartItem) {
		console.log(existingCartItem);
		const mapArry = cartItem.map((product) =>
			product.id === productToAdd.id
				? { ...product, quantity: product.quantity + 1 }
				: product
		);
		return mapArry;
	}

	const arry = [...cartItem, { ...productToAdd, quantity: 1 }];

	return arry;
};

const removeCartItem = (cartItem, productToRemove, remove) => {
	const existingCartItem = cartItem.find(
		(item) => item.id === productToRemove.id
	);

	if (existingCartItem.quantity === 1 || remove === "removeBtn") {
		return cartItem.filter((item) => existingCartItem.id !== item.id);
	}

	return cartItem.map((product) =>
		product.id === productToRemove.id
			? { ...product, quantity: product.quantity - 1 }
			: product
	);
};

export const CartProvider = ({ children }) => {
	const [isCartOpen, setisCartOpen] = useState(false);
	const [cartItem, setCartItem] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	const addItemToCart = (productToAdd) => {
		setCartItem(addCartItem(cartItem, productToAdd));
	};

	const removeItemFromCart = (productToRemove, remove) => {
		setCartItem(removeCartItem(cartItem, productToRemove, remove));
	};
	useEffect(() => {
		const newCartNumber = cartItem.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
		setCartTotal(newCartNumber);
	}, [cartItem]);

	useEffect(() => {
		const newCartNumber = cartItem.reduce(
			(total, item) => total + item.quantity,
			0
		);
		setCartCount(newCartNumber);
	}, [cartItem]);
	const value = {
		isCartOpen,
		setisCartOpen,
		addItemToCart,
		cartItem,
		setCartItem,
		cartCount,
		removeItemFromCart,
		cartTotal,
	};

	return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
// cartItem.map((item) =>
// item.id === productToAdd.id
// 	? { ...item, qantity: item.qantity + 1 }
// 	: cartItem

"use client";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type User = {
	id: string;
	name: string;
	email: string;
	phone?: string;
	address?: string;
};

type AuthContextType = {
	user: User | null;
	register: (data: Omit<User, "id"> & { password: string }) => Promise<void>;
	login: (email: string, password: string) => Promise<void>;
	logout: () => void;
	updateProfile: (data: Partial<User>) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function useLocalStorage<T>(key: string, initial: T) {
	const [value, setValue] = useState<T>(() => {
		if (typeof window === "undefined") return initial;
		const raw = window.localStorage.getItem(key);
		return raw ? (JSON.parse(raw) as T) : initial;
	});
	useEffect(() => {
		try { window.localStorage.setItem(key, JSON.stringify(value)); } catch {}
	}, [key, value]);
	return [value, setValue] as const;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [user, setUser] = useLocalStorage<User | null>("auth:user", null);
	const [usersDb, setUsersDb] = useLocalStorage<Record<string, { user: User; password: string }>>("auth:db", {});

	const register = useCallback(async (data: Omit<User, "id"> & { password: string }) => {
		const id = crypto.randomUUID();
		const newUser: User = { id, name: data.name, email: data.email, phone: data.phone, address: data.address };
		if (usersDb[data.email]) throw new Error("المستخدم موجود مسبقاً");
		const nextDb = { ...usersDb, [data.email]: { user: newUser, password: data.password } };
		setUsersDb(nextDb);
		setUser(newUser);
	}, [usersDb, setUsersDb, setUser]);

	const login = useCallback(async (email: string, password: string) => {
		const rec = usersDb[email];
		if (!rec || rec.password !== password) throw new Error("بيانات الدخول غير صحيحة");
		setUser(rec.user);
	}, [usersDb, setUser]);

	const logout = useCallback(() => setUser(null), [setUser]);

	const updateProfile = useCallback((data: Partial<User>) => {
		if (!user) return;
		const updated = { ...user, ...data } as User;
		setUser(updated);
		setUsersDb({ ...usersDb, [updated.email]: { user: updated, password: usersDb[updated.email]?.password ?? "" } });
	}, [user, usersDb, setUser, setUsersDb]);

	const value = useMemo(() => ({ user, register, login, logout, updateProfile }), [user, register, login, logout, updateProfile]);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuth must be used within AuthProvider");
	return ctx;
}

type CartItem = { id: string; name: string; price: number; unit: string; image: string; qty: number };
type CartContextType = {
	items: CartItem[];
	add: (item: Omit<CartItem, "qty">, qty?: number) => void;
	remove: (id: string) => void;
	clear: () => void;
	total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [items, setItems] = useLocalStorage<CartItem[]>("cart:items", []);
	const add = (item: Omit<CartItem, "qty">, qty = 1) => {
		setItems((prev) => {
			const found = prev.find((p) => p.id === item.id);
			if (found) return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + qty } : p));
			return [...prev, { ...item, qty }];
		});
	};
	const remove = (id: string) => setItems((prev) => prev.filter((p) => p.id !== id));
	const clear = () => setItems([]);
	const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);
	const value = useMemo(() => ({ items, add, remove, clear, total }), [items, total]);
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export function useCart() {
	const ctx = useContext(CartContext);
	if (!ctx) throw new Error("useCart must be used within CartProvider");
	return ctx;
}

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<AuthProvider>
			<CartProvider>{children}</CartProvider>
		</AuthProvider>
	);
};

export default Providers;



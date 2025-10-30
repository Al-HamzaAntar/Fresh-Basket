"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import { useAuth } from "../../providers";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
	const { login } = useAuth();
	const router = useRouter();
	const [form, setForm] = useState({ email: "", password: "" });
	const [error, setError] = useState<string | null>(null);

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setError(null);
		try {
			await login(form.email, form.password);
			router.push("/profile");
		} catch (err: unknown) {
			// Handle unknown errors in a type-safe way
			const message = err instanceof Error ? err.message : String(err ?? "حدث خطأ");
			setError(message);
		}
	};

	return (
		<div className="mx-auto max-w-md px-6 py-10">
			<h1 className="mb-6 text-2xl font-semibold" style={{color: "var(--brand-700)"}}>تسجيل الدخول</h1>
			<form onSubmit={onSubmit} className="space-y-4">
				<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="البريد الإلكتروني" className="w-full rounded-lg border border-black/10 px-4 py-2" />
				<input required type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="كلمة المرور" className="w-full rounded-lg border border-black/10 px-4 py-2" />
				<button type="submit" className="w-full rounded-full px-5 py-2 text-white" style={{backgroundColor: "var(--brand)"}}>دخول</button>
				{error ? <p className="text-sm text-red-600">{error}</p> : null}
			</form>
			<p className="mt-4 text-sm">مستخدم جديد؟ <Link href="/register" className="text-(--brand-700) underline">إنشاء حساب</Link></p>
		</div>
	);
}



"use client";
import { useState } from "react";
import { useAuth } from "../../providers";
import Link from "next/link";
import { UserPlus, Mail, User, Phone, MapPin, Lock, ArrowRight } from "lucide-react";

export default function RegisterPage() {
	const { register } = useAuth();
	const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", password: "" });
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [ok, setOk] = useState(false);

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		
		if (form.password !== confirmPassword) {
			setError("كلمة المرور غير متطابقة");
			return;
		}
		
		if (form.password.length < 6) {
			setError("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
			return;
		}
		
		try {
			await register(form);
			setOk(true);
			setTimeout(() => {
				window.location.href = "/";
			}, 1500);
		} catch (err: any) {
			setError(err?.message ?? "حدث خطأ");
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 py-12">
			<div className="mx-auto max-w-md px-6">
				<Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-emerald-600 mb-8">
					<ArrowRight className="h-4 w-4" />
					العودة للصفحة الرئيسية
				</Link>
				
				<div className="rounded-2xl bg-white p-8 shadow-xl">
					<div className="mb-6 text-center">
						<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 mb-4">
							<UserPlus className="h-8 w-8 text-emerald-600" />
						</div>
						<h1 className="text-3xl font-bold text-gray-900">إنشاء حساب جديد</h1>
						<p className="text-sm text-gray-600 mt-2">انضم إلينا وابدأ التسوق</p>
					</div>
					
					<form onSubmit={onSubmit} className="space-y-4">
						<div>
							<label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
								<User className="h-4 w-4 text-emerald-600" />
								الاسم الكامل
							</label>
							<input 
								required 
								value={form.name} 
								onChange={(e) => setForm({ ...form, name: e.target.value })} 
								placeholder="أدخل اسمك الكامل" 
								className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-emerald-500 focus:bg-white focus:outline-none" 
							/>
						</div>
						
						<div>
							<label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
								<Mail className="h-4 w-4 text-emerald-600" />
								البريد الإلكتروني
							</label>
							<input 
								required 
								type="email" 
								value={form.email} 
								onChange={(e) => setForm({ ...form, email: e.target.value })} 
								placeholder="أدخل بريدك الإلكتروني" 
								className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-emerald-500 focus:bg-white focus:outline-none" 
							/>
						</div>
						
						<div>
							<label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
								<Phone className="h-4 w-4 text-emerald-600" />
								رقم الجوال (اختياري)
							</label>
							<input 
								value={form.phone} 
								onChange={(e) => setForm({ ...form, phone: e.target.value })} 
								placeholder="أدخل رقم جوالك" 
								className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-emerald-500 focus:bg-white focus:outline-none" 
							/>
						</div>
						
						<div>
							<label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
								<MapPin className="h-4 w-4 text-emerald-600" />
								العنوان (اختياري)
							</label>
							<input 
								value={form.address} 
								onChange={(e) => setForm({ ...form, address: e.target.value })} 
								placeholder="أدخل عنوانك" 
								className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-emerald-500 focus:bg-white focus:outline-none" 
							/>
						</div>
						
						<div>
							<label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
								<Lock className="h-4 w-4 text-emerald-600" />
								كلمة المرور
							</label>
							<input 
								required 
								type="password" 
								value={form.password} 
								onChange={(e) => setForm({ ...form, password: e.target.value })} 
								placeholder="أدخل كلمة المرور (6 أحرف على الأقل)" 
								className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-emerald-500 focus:bg-white focus:outline-none" 
							/>
						</div>
						
						<div>
							<label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
								<Lock className="h-4 w-4 text-emerald-600" />
								تأكيد كلمة المرور
							</label>
							<input 
								required 
								type="password" 
								value={confirmPassword} 
								onChange={(e) => setConfirmPassword(e.target.value)} 
								placeholder="أعد إدخال كلمة المرور" 
								className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-emerald-500 focus:bg-white focus:outline-none" 
							/>
						</div>
						
						{error && (
							<div className="rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-600">
								{error}
							</div>
						)}
						
						{ok && (
							<div className="rounded-xl bg-green-50 border border-green-200 p-3 text-sm text-green-700">
								✅ تم إنشاء الحساب بنجاح! جاري التحويل...
							</div>
						)}
						
						<button 
							type="submit" 
							className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-3 font-semibold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700 hover:shadow-xl"
							disabled={ok}
						>
							<UserPlus className="h-5 w-5" />
							إنشاء حساب
						</button>
					</form>
					
					<p className="mt-6 text-center text-sm text-gray-600">
						لديك حساب بالفعل؟{" "}
						<Link href="/login" className="font-semibold text-emerald-600 hover:text-emerald-700 underline">
							سجل الدخول
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}



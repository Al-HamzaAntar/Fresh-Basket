"use client";
import { useAuth } from "../providers";
import { useState } from "react";
import Link from "next/link";
import { User, Mail, Phone, MapPin, Save, LogOut, ArrowRight, Shield } from "lucide-react";

export default function ProfilePage() {
	const { user, updateProfile, logout } = useAuth();
	const [form, setForm] = useState({ name: user?.name ?? "", phone: user?.phone ?? "", address: user?.address ?? "" });

	if (!user) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 py-12">
				<div className="mx-auto max-w-md px-6">
					<div className="rounded-2xl bg-white p-8 shadow-xl text-center">
						<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 mb-6">
							<Shield className="h-10 w-10 text-emerald-600" />
						</div>
						<h2 className="text-2xl font-bold text-gray-900 mb-2">تسجيل الدخول مطلوب</h2>
						<p className="text-gray-600 mb-6">الرجاء تسجيل الدخول للوصول إلى الملف الشخصي</p>
						<Link href="/login" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3 font-semibold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700">
							تسجيل الدخول
						</Link>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 py-12">
			<div className="mx-auto max-w-2xl px-6">
				<div className="mb-8 flex items-center gap-3">
					<Link href="/" className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-emerald-50">
						<ArrowRight className="h-5 w-5 text-gray-700" />
					</Link>
					<div>
						<h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
							<User className="h-8 w-8 text-emerald-600" />
							الملف الشخصي
						</h1>
						<p className="text-sm text-gray-600 mt-1">إدارة معلوماتك الشخصية</p>
					</div>
				</div>

				{/* User Info Card */}
				<div className="mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 p-8 shadow-2xl">
					<div className="flex items-center gap-4 mb-4">
						<div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
							<User className="h-8 w-8 text-white" />
						</div>
						<div>
							<h2 className="text-2xl font-bold text-white">{user.name || 'مستخدم'}</h2>
							<div className="flex items-center gap-2 text-emerald-50 mt-1">
								<Mail className="h-4 w-4" />
								<span className="text-sm">{user.email}</span>
							</div>
						</div>
					</div>
					<div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm w-fit">
						<Shield className="h-4 w-4" />
						المعرف: {user.id.substring(0, 8)}...
					</div>
				</div>

				{/* Edit Form */}
				<div className="rounded-2xl bg-white p-8 shadow-xl">
					<h3 className="text-xl font-bold text-gray-900 mb-6">تحديث المعلومات</h3>
					<form className="space-y-5" onSubmit={(e) => { e.preventDefault(); updateProfile(form); alert("تم حفظ التغييرات ✅"); }}>
						<div>
							<label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
								<User className="h-4 w-4 text-emerald-600" />
								الاسم الكامل
							</label>
							<input 
								value={form.name} 
								onChange={(e) => setForm({ ...form, name: e.target.value })} 
								placeholder="أدخل اسمك الكامل" 
								className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-emerald-500 focus:bg-white focus:outline-none"
							/>
						</div>

						<div>
							<label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
								<Phone className="h-4 w-4 text-emerald-600" />
								رقم الجوال
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
								العنوان
							</label>
							<textarea 
								value={form.address} 
								onChange={(e) => setForm({ ...form, address: e.target.value })} 
								placeholder="أدخل عنوانك بالتفصيل" 
								rows={3}
								className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-emerald-500 focus:bg-white focus:outline-none resize-none"
							/>
						</div>

						<div className="flex flex-col sm:flex-row gap-3 pt-4">
							<button 
								type="submit"
								className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-3 font-semibold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700 hover:shadow-xl"
							>
								<Save className="h-5 w-5" />
								حفظ التغييرات
							</button>
							<button 
								type="button" 
								onClick={logout}
								className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-3 font-semibold text-gray-700 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600"
							>
								<LogOut className="h-5 w-5" />
								تسجيل الخروج
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

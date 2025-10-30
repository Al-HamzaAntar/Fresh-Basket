"use client";
import { useCart } from "../providers";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Trash2, ArrowRight, Package, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function CartPage() {
	const { items, total, remove, clear } = useCart();
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	// Avoid SSR/CSR mismatch by rendering after mount
	if (!mounted) {
		return null;
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 py-12">
			<div className="mx-auto max-w-4xl px-6">
				<div className="mb-8 flex items-center gap-3">
					<Link href="/" className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-emerald-50">
						<ArrowRight className="h-5 w-5 text-gray-700" />
					</Link>
					<div>
						<h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
							<ShoppingCart className="h-8 w-8 text-emerald-600" />
							سلة التسوق
						</h1>
						<p className="text-sm text-gray-600 mt-1" suppressHydrationWarning>
							{items.length} {items.length === 1 ? 'منتج' : 'منتجات'} في السلة
						</p>
					</div>
				</div>

				{items.length === 0 ? (
					<div className="rounded-2xl border-2 border-dashed border-gray-200 bg-white p-12 text-center shadow-sm">
						<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 mb-4">
							<Package className="h-10 w-10 text-gray-400" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">السلة فارغة</h3>
						<p className="text-gray-600 mb-6">لم تقم بإضافة أي منتجات بعد</p>
						<Link href="/" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700">
							<ShoppingCart className="h-4 w-4" />
							ابدأ التسوق
						</Link>
					</div>
				) : (
					<div className="space-y-6">
						{/* Cart Items */}
						<div className="space-y-4">
							{items.map((it) => (
								<div key={it.id} className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-lg">
									<div className="flex items-center gap-4 p-5">
										<div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
											<Image 
												src={it.image} 
												alt={it.name} 
												fill
												className="object-cover"
											/>
										</div>
										
										<div className="flex-1 min-w-0">
											<h3 className="text-lg font-bold text-gray-900 mb-1">{it.name}</h3>
											<div className="flex items-center gap-2 text-sm text-gray-600">
												<span className="font-medium">الكمية:</span>
												<span className="rounded-full bg-emerald-100 px-3 py-0.5 text-emerald-700 font-semibold">
													{it.qty}
												</span>
												<span>×</span>
												<span className="font-semibold text-emerald-600">${it.price.toFixed(2)}</span>
												<span className="text-gray-500">{it.unit}</span>
											</div>
											<div className="mt-2 text-lg font-bold text-emerald-600">
												${(it.price * it.qty).toFixed(2)}
											</div>
										</div>
										
										<button 
											onClick={() => remove(it.id)}
											className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 transition-all hover:bg-red-100 hover:scale-110"
										>
											<Trash2 className="h-5 w-5" />
										</button>
									</div>
								</div>
							))}
						</div>

						{/* Total and Actions */}
						<div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 p-8 shadow-2xl">
							<div className="mb-6 flex items-center justify-between border-b border-white/20 pb-6">
								<span className="text-lg font-semibold text-white">الإجمالي</span>
								<span className="text-4xl font-bold text-white">${total.toFixed(2)}</span>
							</div>
							
							<div className="flex flex-col sm:flex-row gap-3">
								<button 
									onClick={() => { clear(); alert("تم إتمام الطلب بنجاح ✅"); }} 
									className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-emerald-600 shadow-xl transition-all hover:shadow-2xl hover:scale-105"
								>
									<CheckCircle className="h-5 w-5" />
									إتمام الشراء
								</button>
								<button 
									onClick={clear}
									className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/50 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
								>
									<Trash2 className="h-5 w-5" />
									تفريغ السلة
								</button>
							</div>
						</div>

						{/* Continue Shopping */}
						<div className="text-center">
							<Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-emerald-600">
								<ArrowRight className="h-4 w-4" />
								متابعة التسوق
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { Leaf, ShoppingCart, ArrowRight, Sparkles } from "lucide-react";
import { useCart } from "../providers";

const vegetables = [
	{ id: "v1", name: "جزر عضوي", price: 0.99, unit: "/كجم", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&h=500&fit=crop" },
	{ id: "v2", name: "بروكلي أخضر", price: 2.49, unit: "/حبة", image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&h=500&fit=crop" },
	{ id: "v3", name: "خس طازج", price: 1.29, unit: "/حبة", image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=500&h=500&fit=crop" },
	{ id: "v4", name: "طماطم", price: 2.99, unit: "/كجم", image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500&h=500&fit=crop" },
	{ id: "v5", name: "فلفل ملون", price: 3.49, unit: "/كجم", image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500&h=500&fit=crop" },
	{ id: "v6", name: "خيار", price: 1.49, unit: "/كجم", image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=500&h=500&fit=crop" },
	{ id: "v7", name: "بطاطا", price: 0.89, unit: "/كجم", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&h=500&fit=crop" },
	{ id: "v8", name: "بصل", price: 0.79, unit: "/كجم", image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=500&h=500&fit=crop" },
	{ id: "v9", name: "ثوم", price: 2.49, unit: "/كجم", image: "https://images.unsplash.com/photo-1583087823826-0e6f192d3f85?w=500&h=500&fit=crop" },
	{ id: "v10", name: "كوسا", price: 1.79, unit: "/كجم", image: "https://images.unsplash.com/photo-1589927986089-35812378d9e4?w=500&h=500&fit=crop" },
	{ id: "v11", name: "باذنجان", price: 2.29, unit: "/كجم", image: "https://images.unsplash.com/photo-1659261200833-ec8761558af7?w=500&h=500&fit=crop" },
	{ id: "v12", name: "قرنبيط", price: 2.79, unit: "/حبة", image: "https://images.unsplash.com/photo-1568584711271-e0d2d0fea36a?w=500&h=500&fit=crop" },
	{ id: "v13", name: "سبانخ", price: 1.99, unit: "/حزمة", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&h=500&fit=crop" },
	{ id: "v14", name: "كرنب", price: 1.49, unit: "/حبة", image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=500&h=500&fit=crop" },
	{ id: "v15", name: "فجل", price: 1.29, unit: "/حزمة", image: "https://images.unsplash.com/photo-1606688321001-8206d2454536?w=500&h=500&fit=crop" },
	{ id: "v16", name: "ذرة", price: 1.99, unit: "/حبة", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=500&h=500&fit=crop" },
	{ id: "v17", name: "فاصوليا خضراء", price: 2.99, unit: "/كجم", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=500&h=500&fit=crop" },
	{ id: "v18", name: "بازلاء", price: 2.49, unit: "/كجم", image: "https://images.unsplash.com/photo-1596097635667-6a62a3770bf6?w=500&h=500&fit=crop" },
	{ id: "v19", name: "شمندر", price: 1.79, unit: "/كجم", image: "https://images.unsplash.com/photo-1590621678301-7c0d3b7f0c9a?w=500&h=500&fit=crop" },
	{ id: "v20", name: "جرجير", price: 1.49, unit: "/حزمة", image: "https://images.unsplash.com/photo-1622238098673-605b37d5fba9?w=500&h=500&fit=crop" },
	{ id: "v21", name: "كرفس", price: 1.89, unit: "/حزمة", image: "https://images.unsplash.com/photo-1587735243475-46f0e2816fb9?w=500&h=500&fit=crop" },
	{ id: "v22", name: "فطر", price: 3.99, unit: "/كجم", image: "https://images.unsplash.com/photo-1543158181-e6f9f6712055?w=500&h=500&fit=crop" },
];

export default function VegetablesPage() {
	const { add, items } = useCart();
	const cartItemsCount = items.reduce((sum, item) => sum + item.qty, 0);

	return (
		<div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
			{/* Header */}
			<header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/80 backdrop-blur-xl shadow-sm">
				<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
					<Link href="/" className="flex items-center gap-3">
						<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg shadow-emerald-200">
							<Leaf className="h-6 w-6 text-white" />
						</div>
						<div>
							<h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
								سلة الطازج
							</h1>
							<p className="text-xs text-gray-500">خضروات طازجة</p>
						</div>
					</Link>

					<div className="flex items-center gap-3">
						<Link href="/" className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-emerald-600">
							<ArrowRight className="h-4 w-4" />
							<span className="hidden sm:inline">الرئيسية</span>
						</Link>
						<Link href="/cart" className="relative flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700">
							<ShoppingCart className="h-4 w-4" />
							<span className="hidden sm:inline">السلة</span>
							{cartItemsCount > 0 && (
								<span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
									{cartItemsCount}
								</span>
							)}
						</Link>
					</div>
				</div>
			</header>

			<main className="mx-auto max-w-7xl px-6 py-12">
				{/* Page Header */}
				<div className="mb-12 text-center">
					<div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-4">
						<Sparkles className="h-4 w-4" />
						خضروات طازجة وصحية
					</div>
					<h1 className="text-4xl font-bold text-gray-900 mb-4">قسم الخضروات</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						تصفح مجموعتنا الكاملة من الخضروات الطازجة المزروعة بعناية فائقة
					</p>
				</div>

				{/* Products Grid */}
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{vegetables.map((p, idx) => (
						<article
							key={p.id}
							className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up"
							style={{ animationDelay: `${idx * 50}ms` }}
						>
							<div className="relative h-56 w-full overflow-hidden bg-gray-100">
								<Image
									src={p.image}
									alt={p.name}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-110"
								/>
								<div className="absolute top-3 right-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
									طازج
								</div>
							</div>

							<div className="p-5">
								<h3 className="text-lg font-bold text-gray-900 mb-1">{p.name}</h3>
								<div className="mb-3 flex items-center gap-1 text-sm text-emerald-600">
									<div className="h-2 w-2 rounded-full bg-emerald-500"></div>
									متوفر
								</div>

								<div className="flex items-end justify-between">
									<div>
										<span className="text-2xl font-bold text-emerald-600">
											${p.price.toFixed(2)}
										</span>
										<span className="text-sm text-gray-500 mr-1">{p.unit}</span>
									</div>

									<button
										onClick={() => add({ id: p.id, name: p.name, price: p.price, unit: p.unit, image: p.image })}
										className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition-all hover:bg-emerald-700 hover:shadow-xl hover:scale-110"
									>
										<ShoppingCart className="h-5 w-5" />
									</button>
								</div>
							</div>
						</article>
					))}
				</div>
			</main>

			{/* Footer */}
			<footer className="mt-20 border-t border-gray-200 bg-gray-50 py-12">
				<div className="mx-auto max-w-7xl px-6">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600">
								<Leaf className="h-5 w-5 text-white" />
							</div>
							<div>
								<p className="font-bold text-gray-900">سلة الطازج</p>
								<p className="text-sm text-gray-600">طازجة دائماً</p>
							</div>
						</div>
						<p className="text-sm text-gray-600">© 2024 جميع الحقوق محفوظة</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

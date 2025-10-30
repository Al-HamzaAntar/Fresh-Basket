"use client";
import Image from "next/image";
import Link from "next/link";
import { Leaf, ShoppingCart, Sparkles, Tag, Menu, User } from "lucide-react";
import { useCart } from "./providers";
import { useEffect, useState } from "react";

const products = [
	{ 
		id: "p1", 
		name: "تفاح طازج", 
		price: 1.99, 
		unit: "/كجم", 
		image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&h=500&fit=crop"
	},
	{ 
		id: "p2", 
		name: "جزر عضوي", 
		price: 0.99, 
		unit: "/كجم", 
		image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&h=500&fit=crop"
	},
	{ 
		id: "p3", 
		name: "بروكلي أخضر", 
		price: 2.49, 
		unit: "/حبة", 
		image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&h=500&fit=crop"
	},
	{ 
		id: "p4", 
		name: "خس طازج", 
		price: 1.29, 
		unit: "/حبة", 
		image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=500&h=500&fit=crop"
	},
	{ 
		id: "p5", 
		name: "طماطم", 
		price: 2.99, 
		unit: "/كجم", 
		image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500&h=500&fit=crop"
	},
	{ 
		id: "p6", 
		name: "فلفل ملون", 
		price: 3.49, 
		unit: "/كجم", 
		image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500&h=500&fit=crop"
	},
	{ 
		id: "p7", 
		name: "فراولة طازجة", 
		price: 4.99, 
		unit: "/علبة", 
		image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&h=500&fit=crop"
	},
	{ 
		id: "p8", 
		name: "موز", 
		price: 1.79, 
		unit: "/كجم", 
		image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&h=500&fit=crop"
	},
];

export default function Home() {
	const { add, items } = useCart();
	const cartItemsCount = items.reduce((sum, item) => sum + item.qty, 0);
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	
	return (
		<div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 text-[color:var(--foreground)]">
			{/* Modern Header */}
			<header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/80 backdrop-blur-xl shadow-sm">
				<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
					<div className="flex items-center gap-3">
						<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg shadow-emerald-200">
							<Leaf className="h-6 w-6 text-white animate-float" />
						</div>
						<div>
							<h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
								سلة الطازج
							</h1>
							<p className="text-xs text-gray-500">خضار و فواكه</p>
						</div>
					</div>
					
					<nav className="hidden gap-8 text-sm font-medium md:flex">
						<Link href="/new" className="flex items-center gap-2 text-gray-700 transition-colors hover:text-emerald-600">
							<Sparkles className="h-4 w-4" />
							الجديد
						</Link>
						<Link href="/fruits" className="text-gray-700 transition-colors hover:text-emerald-600">فواكه</Link>
						<Link href="/vegetables" className="text-gray-700 transition-colors hover:text-emerald-600">خضروات</Link>
						<Link href="/deals" className="flex items-center gap-2 text-gray-700 transition-colors hover:text-emerald-600">
							<Tag className="h-4 w-4" />
							العروض
						</Link>
					</nav>
					
					<div className="flex items-center gap-3">
						<Link href="/profile" className="hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-700 transition-all hover:bg-emerald-100 hover:text-emerald-600">
							<User className="h-5 w-5" />
						</Link>
						<Link href="/cart" className="relative flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700 hover:shadow-xl">
							<ShoppingCart className="h-4 w-4" />
							<span className="hidden sm:inline">السلة</span>
							{mounted && cartItemsCount > 0 && (
								<span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white" suppressHydrationWarning>
									{cartItemsCount}
								</span>
							)}
						</Link>
						<button className="flex md:hidden items-center justify-center h-10 w-10 rounded-full bg-gray-100">
							<Menu className="h-5 w-5" />
						</button>
					</div>
				</div>
			</header>

			<main className="mx-auto max-w-7xl px-6 py-12">
				{/* Hero Section */}
				<section className="mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-green-600 p-12 shadow-2xl">
					<div className="relative z-10">
						<div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm mb-4">
							<Sparkles className="h-4 w-4" />
							عروض حصرية
						</div>
						<h1 className="mb-4 text-5xl font-bold text-white tracking-tight">
							خضار وفواكه طازجة
							<br />
							<span className="text-emerald-100">إلى باب منزلك</span>
						</h1>
						<p className="max-w-2xl text-lg text-emerald-50 mb-8">
							تسوق منتجات موسمية مختارة من مزارع محلية مع ضمان الطزاجة والجودة العالية
						</p>
						<div className="flex flex-wrap gap-4">
							<a href="#shop" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-emerald-600 shadow-xl transition-all hover:shadow-2xl hover:scale-105">
								تسوق الآن
								<ShoppingCart className="h-5 w-5" />
							</a>
							<Link href="/deals" className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20">
								<Tag className="h-5 w-5" />
								استكشف العروض
							</Link>
						</div>
					</div>
				</section>

				{/* Products Grid */}
				<section id="shop">
					<div className="mb-8 flex items-center justify-between">
						<h2 className="text-3xl font-bold text-gray-900">منتجات طازجة</h2>
						<div className="flex gap-2">
							<button className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-200">
								الكل
							</button>
							<a href="/fruits" className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200">
								فواكه
							</a>
							<a href="/vegetables" className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200">
								خضروات
							</a>
						</div>
					</div>
					
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{products.map((p, idx) => (
							<article 
								key={p.id} 
								className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up"
								style={{animationDelay: `${idx * 80}ms`}}
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
				</section>
			</main>

			{/* Modern Footer */}
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

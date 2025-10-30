"use client";
import Image from "next/image";
import Link from "next/link";
import { Leaf, ShoppingCart, ArrowRight, Sparkles } from "lucide-react";
import { useCart } from "../providers";

const fruits = [
	{ id: "f1", name: "تفاح أحمر", price: 1.99, unit: "/كجم", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&h=500&fit=crop" },
	{ id: "f2", name: "موز", price: 1.79, unit: "/كجم", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&h=500&fit=crop" },
	{ id: "f3", name: "فراولة طازجة", price: 4.99, unit: "/علبة", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&h=500&fit=crop" },
	{ id: "f4", name: "برتقال", price: 2.49, unit: "/كجم", image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500&h=500&fit=crop" },
	{ id: "f5", name: "عنب أخضر", price: 3.99, unit: "/كجم", image: "https://images.unsplash.com/photo-1599819177959-d9e4ee8f8f0e?w=500&h=500&fit=crop" },
	{ id: "f6", name: "مانجو", price: 5.99, unit: "/كجم", image: "https://images.unsplash.com/photo-1605027990121-cbae9d2c2e3c?w=500&h=500&fit=crop" },
	{ id: "f7", name: "أناناس", price: 3.49, unit: "/حبة", image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500&h=500&fit=crop" },
	{ id: "f8", name: "كيوي", price: 2.99, unit: "/كجم", image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=500&h=500&fit=crop" },
	{ id: "f9", name: "خوخ", price: 3.29, unit: "/كجم", image: "https://images.unsplash.com/photo-1629828874514-d6e1e49c3f69?w=500&h=500&fit=crop" },
	{ id: "f10", name: "كرز", price: 6.99, unit: "/كجم", image: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=500&h=500&fit=crop" },
	{ id: "f11", name: "بطيخ", price: 1.49, unit: "/كجم", image: "https://images.unsplash.com/photo-1587049352846-4a222e784366?w=500&h=500&fit=crop" },
	{ id: "f12", name: "شمام", price: 2.29, unit: "/كجم", image: "https://images.unsplash.com/photo-1621583542243-1ff1e6c41e25?w=500&h=500&fit=crop" },
	{ id: "f13", name: "توت أزرق", price: 7.99, unit: "/علبة", image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=500&h=500&fit=crop" },
	{ id: "f14", name: "رمان", price: 4.49, unit: "/كجم", image: "https://images.unsplash.com/photo-1615485500834-bc10199bc6dd?w=500&h=500&fit=crop" },
	{ id: "f15", name: "ليمون", price: 1.99, unit: "/كجم", image: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=500&h=500&fit=crop" },
	{ id: "f16", name: "برقوق", price: 3.79, unit: "/كجم", image: "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=500&h=500&fit=crop" },
	{ id: "f17", name: "كمثرى", price: 2.89, unit: "/كجم", image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=500&h=500&fit=crop" },
	{ id: "f18", name: "تين", price: 5.49, unit: "/كجم", image: "https://images.unsplash.com/photo-1568659172822-32f1e5b68ea6?w=500&h=500&fit=crop" },
	{ id: "f19", name: "جوافة", price: 2.49, unit: "/كجم", image: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=500&h=500&fit=crop" },
	{ id: "f20", name: "باباي", price: 3.99, unit: "/كجم", image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=500&h=500&fit=crop" },
];

export default function FruitsPage() {
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
							<p className="text-xs text-gray-500">فواكه طازجة</p>
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
						فواكه طازجة ولذيذة
					</div>
					<h1 className="text-4xl font-bold text-gray-900 mb-4">قسم الفواكه</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						اكتشف مجموعتنا الواسعة من الفواكه الطازجة المختارة بعناية من أجود المزارع
					</p>
				</div>

				{/* Products Grid */}
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{fruits.map((p, idx) => (
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

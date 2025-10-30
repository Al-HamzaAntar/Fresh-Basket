"use client";
import Image from "next/image";
import Link from "next/link";
import { Leaf, ShoppingCart, ArrowRight, Sparkles } from "lucide-react";
import { useCart } from "../providers";
import { useEffect, useState } from "react";

// Latest products (you can tune this list as desired)
const latest = [
  { id: "n1", name: "تفاح طازج", price: 1.99, unit: "/كجم", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&h=500&fit=crop" },
  { id: "n2", name: "فراولة موسمية", price: 4.79, unit: "/علبة", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&h=500&fit=crop" },
  { id: "n3", name: "برتقال عصيري", price: 2.39, unit: "/كجم", image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500&h=500&fit=crop" },
  { id: "n4", name: "عنب أخضر ممتاز", price: 3.99, unit: "/كجم", image: "https://images.unsplash.com/photo-1599819177959-d9e4ee8f8f0e?w=500&h=500&fit=crop" },
  { id: "n5", name: "مانجو سكري", price: 5.89, unit: "/كجم", image: "https://images.unsplash.com/photo-1605027990121-cbae9d2c2e3c?w=500&h=500&fit=crop" },
  { id: "n6", name: "طماطم كرزية", price: 3.09, unit: "/علبة", image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500&h=500&fit=crop" }
];

export default function NewProductsPage() {
  const { add, items } = useCart();
  const cartItemsCount = items.reduce((s, it) => s + it.qty, 0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg shadow-emerald-200">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">سلة الطازج</h1>
              <p className="text-xs text-gray-500">الجديد</p>
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
              {mounted && cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white" suppressHydrationWarning>
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-4">
            <Sparkles className="h-4 w-4" />
            أحدث الإضافات
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">الجديد</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">منتجات تم إضافتها حديثاً بتشكيلة منتقاة</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {latest.map((p, idx) => (
            <article key={p.id} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${idx * 60}ms` }}>
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute top-3 right-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-lg">جديد</div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{p.name}</h3>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-2xl font-bold text-emerald-600">${p.price.toFixed(2)}</span>
                    <span className="text-sm text-gray-500 mr-1">{p.unit}</span>
                  </div>
                  <button onClick={() => add({ id: p.id, name: p.name, price: p.price, unit: p.unit, image: p.image })} className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition-all hover:bg-emerald-700 hover:shadow-xl hover:scale-110">
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

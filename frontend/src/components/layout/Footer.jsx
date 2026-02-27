import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="border-t border-[#222] px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-['Cormorant_Garamond'] text-[18px] font-semibold tracking-[0.08em] text-[#e8e2d9]">
                Manga<span className="text-[#c9a84c]">Shop</span>
            </div>

            <div className="flex gap-8">
                {[
                    ['/products', 'Truyện tranh'],
                    ['/about',    'Giới thiệu'],
                    ['/shipping', 'Giao hàng'],
                    ['/contact',  'Liên hệ'],
                ].map(([to, label]) => (
                    <Link key={to} to={to}
                        className="text-[11px] tracking-[0.1em] uppercase text-[#555] hover:text-[#c9a84c] no-underline transition-colors">
                        {label}
                    </Link>
                ))}
            </div>

            <div className="text-[11px] tracking-[0.08em] text-[#555]">
                © {new Date().getFullYear()} MangaShop
            </div>
        </footer>
    );
}
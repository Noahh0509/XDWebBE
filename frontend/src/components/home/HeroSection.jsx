import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center px-12 overflow-hidden">
            {/* Background radial glow */}
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)' }} />

            {/* Vertical divider line */}
            <div className="absolute top-0 bottom-0 right-[38%] w-px bg-[#222] hidden lg:block" />

            {/* Content */}
            <div className="max-w-[560px] animate-[fadeUp_1s_ease_both]">
                <div className="flex items-center gap-3 mb-7">
                    <span className="w-8 h-px bg-[#c9a84c] block" />
                    <span className="text-[11px] tracking-[0.2em] uppercase text-[#c9a84c]">
                        Bộ sưu tập mới nhất
                    </span>
                </div>

                <h1 className="font-['Cormorant_Garamond'] font-light leading-[1.0] tracking-[-0.02em] mb-7"
                    style={{ fontSize: 'clamp(52px, 7vw, 96px)' }}>
                    Thiên đường<br />
                    <em className="italic text-[#c9a84c]">truyện tranh</em><br />
                    của bạn
                </h1>

                <p className="text-[14px] text-[#888] max-w-[380px] leading-[1.8] mb-12">
                    Hàng ngàn đầu sách manga, comic, truyện tranh Việt — được tuyển chọn kỹ lưỡng, giao hàng toàn quốc.
                </p>

                <div className="flex items-center gap-8">
                    <Link to="/products"
                        className="px-9 py-[14px] bg-[#c9a84c] text-black text-[11px] tracking-[0.16em] uppercase font-medium
                            no-underline hover:bg-[#e0bc5f] hover:-translate-y-px transition-all duration-250 shadow-[0_8px_24px_rgba(201,168,76,0.2)]">
                        Khám phá ngay
                    </Link>
                    <Link to="/products?filter=new"
                        className="text-[12px] tracking-[0.1em] text-[#888] no-underline border-b border-[#333] pb-px
                            hover:text-[#e8e2d9] hover:border-[#e8e2d9] transition-all">
                        Xem mới ra mắt →
                    </Link>
                </div>
            </div>

            {/* Stats — right side */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 w-[30%] hidden lg:flex flex-col animate-[fadeUp_1s_0.3s_ease_both]">
                {[
                    { num: '5,000+', label: 'Đầu sách' },
                    { num: '100+',   label: 'Thể loại' },
                    { num: '50K+',   label: 'Khách hàng' },
                ].map(({ num, label }) => (
                    <div key={label} className="py-7 border-b border-[#222] first:border-t first:border-[#222]">
                        <div className="font-['Cormorant_Garamond'] text-[42px] font-light text-[#e8e2d9] leading-none">
                            {num}
                        </div>
                        <div className="text-[11px] tracking-[0.16em] uppercase text-[#555] mt-1.5">
                            {label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
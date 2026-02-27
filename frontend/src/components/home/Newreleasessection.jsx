import React from 'react';
import { Link } from 'react-router-dom';

const NEW_RELEASES = [
    { id: 9,  title: 'Blue Lock — Tập 28',    author: 'Muneyuki Kaneshiro', genre: 'Sports',  price: 38000 },
    { id: 10, title: 'Chainsaw Man — Tập 17', author: 'Tatsuki Fujimoto',  genre: 'Seinen',  price: 40000 },
    { id: 11, title: 'Kaiju No.8 — Tập 11',  author: 'Naoya Matsumoto',   genre: 'Shounen', price: 38000 },
    { id: 12, title: 'Dandadan — Tập 14',     author: 'Yukinobu Tatsu',    genre: 'Sci-fi',  price: 42000 },
    { id: 13, title: 'Wind Breaker — Tập 9',  author: 'Satoru Nii',        genre: 'Shounen', price: 35000 },
];

export default function NewReleasesSection() {
    return (
        <section className="px-12 pb-24">
            {/* Header */}
            <div className="flex items-end justify-between pb-6 border-b border-[#222] mb-0">
                <div>
                    <div className="text-[10px] tracking-[0.22em] uppercase text-[#c9a84c] mb-3">Vừa cập bến</div>
                    <h2 className="font-['Cormorant_Garamond'] font-light leading-[1.1]"
                        style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
                        Mới ra mắt
                    </h2>
                </div>
                <Link to="/products?filter=new"
                    className="text-[11px] tracking-[0.14em] uppercase text-[#555] no-underline
                        border-b border-[#333] pb-px hover:text-[#c9a84c] hover:border-[#c9a84c] transition-all whitespace-nowrap mb-1">
                    Xem tất cả →
                </Link>
            </div>

            {/* Editorial list */}
            <div className="flex flex-col">
                {NEW_RELEASES.map((manga, i) => (
                    <Link key={manga.id} to={`/products/${manga.id}`}
                        className="group grid items-center gap-6 py-5 border-b border-[#222] no-underline
                            hover:pl-3 transition-all duration-250"
                        style={{ gridTemplateColumns: '48px 1fr auto auto', color: 'inherit' }}>

                        {/* Index number */}
                        <span className="font-['Cormorant_Garamond'] text-[13px] text-[#444] text-right">
                            {String(i + 1).padStart(2, '0')}
                        </span>

                        {/* Title + author */}
                        <div>
                            <div className="font-['Cormorant_Garamond'] text-[20px] font-normal
                                group-hover:text-[#c9a84c] transition-colors">
                                {manga.title}
                            </div>
                            <div className="text-[12px] text-[#555] mt-0.5">{manga.author}</div>
                        </div>

                        {/* Badge */}
                        <span className="text-[9px] tracking-[0.14em] uppercase px-2 py-1
                            border border-[#8a6d2f] text-[#c9a84c]">
                            Mới
                        </span>

                        {/* Price */}
                        <span className="text-[14px] font-medium text-[#e8e2d9] min-w-[80px] text-right">
                            {manga.price.toLocaleString('vi-VN')}đ
                        </span>
                    </Link>
                ))}
            </div>

            {/* CTA Banner */}
            <div className="mt-16 border border-[#222] p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 50% 100% at 0% 50%, rgba(201,168,76,0.05), transparent)' }} />
                <div className="relative">
                    <h3 className="font-['Cormorant_Garamond'] font-light leading-[1.2]"
                        style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}>
                        Không bỏ lỡ<br />
                        <em className="italic text-[#c9a84c]">tập mới nào.</em>
                    </h3>
                    <p className="text-[13px] text-[#555] mt-3 max-w-sm">
                        Đăng ký tài khoản để nhận thông báo sách mới, ưu đãi độc quyền và nhiều hơn nữa.
                    </p>
                </div>
                <Link to="/register"
                    className="relative flex-shrink-0 px-9 py-[14px] bg-[#c9a84c] text-black
                        text-[11px] tracking-[0.16em] uppercase font-medium no-underline
                        hover:bg-[#e0bc5f] hover:-translate-y-px transition-all duration-250">
                    Tạo tài khoản
                </Link>
            </div>
        </section>
    );
}
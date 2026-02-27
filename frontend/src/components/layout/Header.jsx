import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem('accessToken');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        navigate('/login');
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-12
                transition-all duration-300
                ${scrolled ? 'border-b border-[#222] bg-[#0e0e0eeb] backdrop-blur-md' : 'border-b border-transparent'}`}
        >
            {/* Logo */}
            <Link to="/"
                className="font-['Cormorant_Garamond'] text-[22px] font-semibold tracking-[0.08em] text-[#e8e2d9] no-underline flex items-center gap-2 hover:opacity-80 transition-opacity">
                Manga<span className="text-[#c9a84c]">Shop</span>
            </Link>

            {/* Nav links — desktop */}
            <nav className="hidden md:flex items-center gap-10">
                {[
                    { to: '/',         label: 'Trang chủ' },
                    { to: '/products', label: 'Truyện tranh' },
                    { to: '/about',    label: 'Về chúng tôi' },
                ].map(({ to, label }) => (
                    <Link key={to} to={to}
                        className="text-[11px] tracking-[0.14em] uppercase text-[#888] hover:text-[#e8e2d9] transition-colors no-underline">
                        {label}
                    </Link>
                ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-6">
                {/* Cart */}
                <Link to="/cart" className="text-[#888] hover:text-[#c9a84c] transition-colors">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z"/>
                    </svg>
                </Link>

                {isLoggedIn ? (
                    <div className="flex items-center gap-5">
                        <Link to="/profile"
                            className="text-[11px] tracking-[0.14em] uppercase text-[#888] hover:text-[#e8e2d9] transition-colors no-underline">
                            Tài khoản
                        </Link>
                        <button onClick={handleLogout}
                            className="text-[11px] tracking-[0.14em] uppercase text-[#555] hover:text-red-400 transition-colors bg-transparent border-none">
                            Đăng xuất
                        </button>
                    </div>
                ) : (
                    <Link to="/login"
                        className="px-5 py-2 border border-[#8a6d2f] text-[#c9a84c] text-[11px] tracking-[0.14em] uppercase
                            no-underline hover:bg-[#c9a84c] hover:text-black transition-all duration-250">
                        Đăng nhập
                    </Link>
                )}

                {/* Hamburger mobile */}
                <button className="md:hidden text-[#888] bg-transparent border-none"
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="absolute top-[72px] left-0 right-0 bg-[#161616] border-b border-[#222] px-6 py-5 flex flex-col gap-5 md:hidden">
                    {[['/', 'Trang chủ'], ['/products', 'Truyện tranh'], ['/about', 'Về chúng tôi']].map(([to, label]) => (
                        <Link key={to} to={to} onClick={() => setMenuOpen(false)}
                            className="text-[11px] tracking-[0.14em] uppercase text-[#888] hover:text-[#c9a84c] no-underline transition-colors">
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
import React, { useEffect, useRef } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import FeaturedSection from '../components/home/Featuredsection';
import NewReleasesSection from '../components/home/Newreleasessection';

export default function HomePage() {
    const cursorRef = useRef(null);
    const ringRef   = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const ring   = ringRef.current;
        if (!cursor || !ring) return;

        let ringX = 0, ringY = 0;
        let rafId;

        const onMove = (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top  = e.clientY + 'px';
        };

        // Smooth ring follow
        const tick = () => {
            ring.style.left = ringX + 'px';
            ring.style.top  = ringY + 'px';
            rafId = requestAnimationFrame(tick);
        };

        const onMoveRing = (e) => {
            ringX += (e.clientX - ringX) * 0.18;
            ringY += (e.clientY - ringY) * 0.18;
        };

        window.addEventListener('mousemove', onMove);
        window.addEventListener('mousemove', onMoveRing);
        rafId = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mousemove', onMoveRing);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-[#0e0e0e] text-[#e8e2d9]">
            {/* Custom cursor */}
            <div ref={cursorRef}
                className="fixed w-2 h-2 bg-[#c9a84c] rounded-full pointer-events-none z-[9999]"
                style={{ transform: 'translate(-50%,-50%)' }} />
            <div ref={ringRef}
                className="fixed w-8 h-8 rounded-full pointer-events-none z-[9998]"
                style={{ border: '1px solid rgba(201,168,76,0.4)', transform: 'translate(-50%,-50%)' }} />

            <Header />

            <main className="flex-1">
                <HeroSection />
                <FeaturedSection />
                <NewReleasesSection />
            </main>

            <Footer />
        </div>
    );
}
import React, { useEffect, useRef } from 'react';
import LoginLeftPanel from '../components/login/LoginLeftPanel';
import LoginForm from '../components/login/LoginForm';

export default function LoginPage() {
    const cursorRef = useRef(null);
    const ringRef   = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const ring   = ringRef.current;
        if (!cursor || !ring) return;

        let rx = 0, ry = 0, rafId;

        const onMove = (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top  = e.clientY + 'px';
        };
        const onMoveRing = (e) => {
            rx += (e.clientX - rx) * 0.18;
            ry += (e.clientY - ry) * 0.18;
        };
        const tick = () => {
            ring.style.left = rx + 'px';
            ring.style.top  = ry + 'px';
            rafId = requestAnimationFrame(tick);
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
        <div className="min-h-screen w-full flex bg-[#0e0e0e] text-[#e8e2d9]" style={{ cursor: 'none' }}>

            {/* Custom cursor */}
            <div ref={cursorRef} className="fixed w-2 h-2 bg-[#c9a84c] rounded-full pointer-events-none z-[9999]"
                style={{ transform: 'translate(-50%,-50%)' }} />
            <div ref={ringRef} className="fixed w-8 h-8 rounded-full pointer-events-none z-[9998]"
                style={{ border: '1px solid rgba(201,168,76,0.4)', transform: 'translate(-50%,-50%)' }} />

            {/* Left — quote panel */}
            <LoginLeftPanel />

            {/* Right — form */}
            <div className="flex-1 flex items-center justify-center px-8 md:px-16 lg:px-20 py-16">
                <LoginForm />
            </div>
        </div>
    );
}
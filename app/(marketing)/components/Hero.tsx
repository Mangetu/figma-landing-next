'use client';
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight"
                    >
                        ピクセル精度で<br />FigmaをWebに。
                    </motion.h1>
                    <p className="mt-6 text-lg leading-relaxed text-gray-600">
                        タイポ、余白、グリッド、モーションまでFigmaの意図を忠実に再現します。
                    </p>
                    <div className="mt-8 flex gap-4">
                        <a
                            href="#cta"
                            className="inline-flex items-center rounded-2xl bg-brand-600 px-6 py-3 text-white hover:bg-brand-500 transition"
                        >
                            相談する
                        </a>
                        <a
                            href="#features"
                            className="inline-flex items-center rounded-2xl border px-6 py-3 hover:bg-gray-50"
                        >
                            特長を見る
                        </a>
                    </div>
                </div>
                <div className="relative h-72 md:h-96">
                    {/* <Image src="/images/logo.svg" alt="Preview" fill priority /> */}
                </div>
            </div>
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-transparent" />
        </section>
    );
}
export default function Cta() {
    return (
        <section id="cta" className="py-24">
            <div className="container mx-auto px-6 text-center">
                <div className="rounded-2xl border p-10">
                    <h2 className="text-2xl md:text-4xl font-semibold">Figmaデータでのご相談歓迎</h2>
                    <p className="mt-4 text-gray-600">リンク共有いただければ、実装方針・見積もりを短時間で提示します。</p>
                    <a
                        href="#"
                        className="inline-block mt-8 rounded-2xl bg-brand-600 px-8 py-3 text-white hover:bg-brand-500"
                    >
                        相談フォームへ
                    </a>
                </div>
            </div>
        </section>
    );
}
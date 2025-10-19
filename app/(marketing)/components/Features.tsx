export default function Features() {
    const items = [
        {
            title: 'Design Token対応',
            body: 'FigmaトークンをCSSカスタムプロパティへ落とし込み、複数ブランドを切替可能。'
        },
        {
            title: 'アクセシビリティ',
            body: 'ARIA/フォーカス/コントラストをチェックし、キーボード操作に配慮。'
        },
        {
            title: 'RSC優先設計',
            body: 'App Routerでサーバーコンポーネントを基本に、必要箇所のみClient化。'
        }
    ];


    return (
        <section id="features" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl md:text-4xl font-semibold">実装の特長</h2>
                <div className="mt-10 grid md:grid-cols-3 gap-6">
                    {items.map((it) => (
                        <div key={it.title} className="rounded-2xl border p-6 hover:shadow-sm transition">
                            <h3 className="text-xl font-semibold">{it.title}</h3>
                            <p className="mt-3 text-gray-600 leading-relaxed">{it.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
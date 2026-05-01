export default function StickyNav({ sections }) {
  return (
    <div className="sticky top-0 bg-black/80 border-b border-white/10">
      <div className="flex gap-6 px-6 py-3 text-sm text-gray-400">
        {sections.map(s => (
          <a key={s} href={`#${s}`}>{s}</a>
        ))}
      </div>
    </div>
  );
}

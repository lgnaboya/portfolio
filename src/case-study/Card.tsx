export default function Card({ title, desc }) {
  return (
    <div className="p-5 border border-white/10 rounded-lg bg-white/5">
      <h3 className="font-semibold">{title}</h3>
      {desc && <p className="text-gray-400 mt-2">{desc}</p>}
    </div>
  );
}

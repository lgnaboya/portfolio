export default function Section({ id, label, title, children }) {
  return (
    <section id={id} className="space-y-4 max-w-3xl">
      <p className="text-xs uppercase text-gray-500">{label}</p>
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

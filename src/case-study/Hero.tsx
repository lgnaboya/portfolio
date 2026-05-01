export default function Hero({ data }) {
  return (
    <section className="h-[60vh] flex items-center px-6">
      <div>
        <p className="text-gray-400">{data.date}</p>
        <h1 className="text-5xl font-bold mt-2">{data.title}</h1>
        <p className="text-gray-400 mt-4 max-w-xl">{data.description}</p>
      </div>
    </section>
  );
}

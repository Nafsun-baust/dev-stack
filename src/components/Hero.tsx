import banner from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section className="container mx-auto flex items-center justify-between py-16">
      <div>
        <h1 className="text-5xl font-bold text-gray-900">
          Build Your Ideal <br />
          <span className="text-red-500">
            Development Stack
          </span>
        </h1>

        <p className="max-w-lg my-6 text-gray-600">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits your
          next project.
        </p>

        <div className="flex gap-3">
          <button className="px-5 py-3 bg-red-500 text-white rounded-lg">
            Explore Technologies
          </button>

          <button className="px-5 py-3 border border-gray-300 rounded-lg">
            Learn More
          </button>
        </div>
      </div>

      <img src={banner} className="w-80" />
    </section>
  );
}
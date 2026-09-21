import { useEffect, useState } from "react";
import type { Technology } from "../types";

export default function Technologies() {
  const [techs, setTechs] = useState<Technology[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setTechs(data);
    };

    loadData();
  }, []);

  return (
    <section className="container mx-auto py-16">

      <h2 className="text-3xl font-bold">
        Explore the <span className="text-red-500">Technologies</span>
      </h2>

      <p className="text-gray-500 mt-2 mb-8">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="flex gap-6">

        <div className="grid grid-cols-3 gap-5 flex-1">
          {techs.map((tech) => (
            <div
              key={tech.id}
              className="border border-gray-200 rounded-xl p-5"
            >
              <div className="flex justify-between items-start">
                <img src={tech.icon} className="w-10 h-10" />

                <span className="text-xs bg-red-50 text-red-500 px-3 py-1 rounded-full">
                  {tech.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold mt-4">
                {tech.name}
              </h3>

              <p className="text-sm text-gray-500 mt-2 h-10">
                {tech.description}
              </p>

              <div className="flex justify-between text-xs text-gray-500 mt-5">
                <span>{tech.category}</span>
                <span>{tech.difficulty}</span>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span>⭐ {tech.rating}</span>

                <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm">
                  Add to Stack
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="w-70 border border-gray-200 rounded-xl p-5 h-fit">
          <h3 className="font-bold text-lg">Your Stack</h3>

          <p className="text-sm text-gray-400 mt-1">
            No technologies selected yet.
          </p>

          <div className="border border-dashed border-gray-300 rounded-md py-10 text-center text-gray-400 mt-5">
            Your stack is empty.
          </div>
        </div>

      </div>
    </section>
  );
}
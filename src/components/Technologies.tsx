import { useEffect, useState } from "react";
import type { Technology } from "../types";
import TechList from "./TechList";
import Sidebar from "./Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Technologies() {
  const [techs, setTechs] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();
        setTechs(data);
      } catch {
        toast.error("Failed to load data");
      }
    };

    loadData();
  }, []);

  const addToStack = (tech: Technology) => {
    if (stack.some(item => item.id === tech.id)) {
      toast.warning("Already added!");
      return;
    }

    setStack([...stack, tech]);
    toast.success("Technology added!");
  };

  const removeFromStack = (id: string) => {
    setStack(stack.filter(item => item.id !== id));
    toast.info("Technology removed!");
  };

  const removeAll = () => {
    setStack([]);
    toast.error("All technologies removed!");
  };

  return (
    <section className="container mx-auto py-16">
      <ToastContainer />

      <h2 className="text-3xl font-bold">
        Explore the <span className="text-red-500">Technologies</span>
      </h2>

      <p className="text-gray-500 mt-2 mb-8">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="flex gap-6">
        <TechList
          techs={techs}
          stack={stack}
          addToStack={addToStack}
        />

        <Sidebar
          stack={stack}
          removeFromStack={removeFromStack}
          removeAll={removeAll}
        />
      </div>
    </section>
  );
}
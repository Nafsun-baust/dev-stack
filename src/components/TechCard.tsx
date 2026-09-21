import type { Technology } from "../types";
import { FaStar } from "react-icons/fa";

type Props = {
    tech: Technology;
    stack: Technology[];
    addToStack: (tech: Technology) => void;
};

export default function TechCard({ tech, stack, addToStack }: Props) {
    const added = stack.some(item => item.id === tech.id);

    return (
        <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex justify-between">
                <img src={tech.icon} className="w-10 h-10" />
                <span className="text-xs text-red-500">{tech.badge}</span>
            </div>

            <h3 className="font-bold mt-4">{tech.name}</h3>

            <p className="text-sm text-gray-500 mt-2">
                {tech.description}
            </p>

            <div className="flex justify-between text-xs text-gray-500 mt-4">
                <span>{tech.category}</span>
                <span>{tech.difficulty}</span>
            </div>

            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{tech.rating}</span>
                </div>

                <button
                    onClick={() => addToStack(tech)}
                    disabled={added}
                    className="bg-gray-900 text-white px-3 py-2 rounded disabled:bg-gray-400"
                >
                    {added ? "Added" : "Add to Stack"}
                </button>
            </div>
        </div>
    );
}
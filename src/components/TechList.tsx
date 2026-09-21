import type { Technology } from "../types";
import TechCard from "./TechCard";

type Props = {
  techs: Technology[];
  stack: Technology[];
  addToStack: (tech: Technology) => void;
};

export default function TechList({ techs, stack, addToStack }: Props) {
  return (
    <div className="grid grid-cols-3 gap-5 flex-1">
      {techs.map(tech => (
        <TechCard
          key={tech.id}
          tech={tech}
          stack={stack}
          addToStack={addToStack}
        />
      ))}
    </div>
  );
}
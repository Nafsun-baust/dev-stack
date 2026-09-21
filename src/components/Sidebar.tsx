import type { Technology } from "../types";

type Props = {
  stack: Technology[];
  removeFromStack: (id: string) => void;
  removeAll: () => void;
};

export default function Sidebar({ stack, removeFromStack, removeAll }: Props) {
  return (
    <div className="w-70 border border-gray-200 rounded-xl p-5 h-fit">
      <h3 className="font-bold">Your Stack</h3>

      <p className="text-sm text-gray-500">
        {stack.length} Technologies Selected
      </p>

      {stack.length === 0 && (
        <p className="text-gray-400 mt-5">
          Your stack is empty.
        </p>
      )}

      {stack.map(item => (
        <div key={item.id} className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <img src={item.icon} className="w-7" />

            <div>
              <p>{item.name}</p>
              <p className="text-xs text-gray-500">{item.category}</p>
            </div>
          </div>

          <button
            onClick={() => removeFromStack(item.id)}
            className="text-red-500"
          >
            ✕
          </button>
        </div>
      ))}

      {stack.length > 0 && (
        <button
          onClick={removeAll}
          className="w-full border border-red-500 text-red-500 py-2 mt-5"
        >
          Remove All
        </button>
      )}
    </div>
  );
}
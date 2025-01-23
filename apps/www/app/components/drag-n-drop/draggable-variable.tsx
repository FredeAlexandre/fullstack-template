import { useDraggable } from "@dnd-kit/core";
import type React from "react";
import { useContext, useRef, useState } from "react";
import { MyContext } from "./context";

export interface DraggableVariableProps {
  id: string;
  name: string;
  content: string;
  position: {
    x: number;
    y: number;
  };
}

export function DraggableVariable({
  id,
  content,
  name,
  position,
}: DraggableVariableProps) {
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform } =
    useDraggable({
      id: id,
    });

  const functionNameRef = useRef<HTMLInputElement>(null);

  const { changeFunctionName, getFunctionName } = useContext(MyContext);

  const [inputText, setInputText] = useState(getFunctionName(id));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    changeFunctionName(id, e.target.value);
  };

  return (
    <div
      id={id}
      ref={setNodeRef}
      style={{
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
        left: `${position.x}px`,
        top: `${position.y}px`,
        position: "absolute",
      }}
      className="absolute mb-4 flex h-12 w-64 place-items-center rounded-lg border border-black bg-white font-medium text-black text-sm"
      {...attributes}
    >
      <input
        type="text"
        ref={functionNameRef}
        value={inputText}
        onChange={handleInputChange}
        className="ml-4"
        onKeyDown={(e) => {
          // Empêche l'événement de drag lors de la saisie
          e.stopPropagation();
          if (e.key === "Enter") {
            if (functionNameRef.current) {
              functionNameRef.current.blur();
            }
          }
        }}
      />
      <div
        style={{ cursor: "grab" }}
        {...listeners}
        className="mr-4 flex w-full justify-end"
      >
        {/* Zone de drag, peut être une icône ou un simple texte */}
        <span>:::</span>
      </div>
    </div>
  );
}

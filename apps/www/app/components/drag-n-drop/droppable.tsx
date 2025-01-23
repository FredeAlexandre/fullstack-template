import { useDroppable } from "@dnd-kit/core";
import type React from "react";

interface DroppableProps {
  children: React.ReactNode;
}

const CustomStyle: React.CSSProperties = {
  display: "flex",
};

export function Droppable({ children }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={{ ...style, ...CustomStyle }}>
      {children}
    </div>
  );
}

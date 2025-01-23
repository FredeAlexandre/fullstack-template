import {
  DndContext,
  type DragEndEvent,
  type DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useDraggable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import type React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "./context";
import type { DraggableFunctionProps } from "./draggable-function";
import type { DraggableVariableProps } from "./draggable-variable";
import { SortableFunction } from "./sortable-function";

export interface DraggableContractProps {
  id: string;
  name: string;
  content: string;
  position: {
    x: number;
    y: number;
  };
  functions: DraggableFunctionProps[];
  variables: DraggableVariableProps[];
}
export function onDragEndContract(ev: DragEndEvent) {}

export function DraggableContract({
  id,
  name,
  position,
}: DraggableContractProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
    });

  const { contracts, delFunctionContract, updatePosition } =
    useContext(MyContext);

  const contractNameRef = useRef<HTMLInputElement>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over, delta } = event;
    console.log("end drag !!!");

    // Récupérer les coordonnées de l'élément actif
    const rect = active.rect.current.translated; // Rect transformée par le drag
    if (rect && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      // Vérification si l'élément est en dehors du conteneur
      if (
        rect.left < containerRect.left ||
        rect.right > containerRect.right ||
        rect.top < containerRect.top ||
        rect.bottom > containerRect.bottom
      ) {
        delFunctionContract(id, active.id.toString());
        const func = functions.find((n) => n.id === active.id);
        if (func) {
          updatePosition(active.id.toString(), rect.left, rect.top);
        }
        setFunctions((prev) => {
          const updatedFunctions = prev.filter((func) => func.id !== active.id);
          return updatedFunctions; // Retourner un nouvel array
        });

        setItems((prev) => {
          const updatedItems = prev.filter((item) => item.id !== active.id);
          return updatedItems; // Retourner un nouvel array
        });

        return;
      }
    }
    if (over && active?.id !== over?.id) {
      setItems((prev) => {
        const activeIndex = prev.findIndex((item) => item.id === active?.id);
        const overIndex = prev.findIndex((item) => item.id === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };

  const handleDragStart = (event: DragStartEvent) => {
    console.log("start drag !!!");
  };

  const [functions, setFunctions] = useState<DraggableFunctionProps[]>([]); // State local pour les fonctions

  // Lors du premier rendu, trouver le contrat associé et en extraire les fonctions
  useEffect(() => {
    const contract = contracts.find((contract) => contract.props.id === id);
    if (contract) {
      setFunctions(contract.props.functions);
      setItems(functions);
    }
  }, [contracts, id, functions]);

  const [items, setItems] = useState(functions);

  const [inputText, setInputText] = useState(name);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div
      id={id}
      ref={containerRef}
      style={{
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
        left: `${position.x}px`,
        top: `${position.y}px`,
        position: "absolute",
        opacity: isDragging ? 0.6 : 1,
      }}
      className="flex h-fit w-96 flex-col rounded-lg border-2 border-black bg-white font-medium text-black text-sm"
      {...attributes}
    >
      <div className="mt-4 flex h-12 w-full flex-row items-center justify-start">
        <input
          type="text"
          ref={contractNameRef}
          value={inputText}
          onChange={handleInputChange}
          className="ml-4"
          onKeyDown={(e) => {
            e.stopPropagation();
            if (e.key === "Enter") {
              if (contractNameRef.current) {
                contractNameRef.current.blur();
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
      <div className="my-8 flex justify-center">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
        >
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            <ul>
              {items.map((item) => (
                <SortableFunction
                  id={item.id}
                  key={item.id}
                  content={item.name}
                  name={item.name}
                  variables={item.variables}
                />
              ))}
            </ul>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}

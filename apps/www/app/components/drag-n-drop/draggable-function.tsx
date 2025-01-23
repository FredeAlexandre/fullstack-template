import {
  DndContext,
  type DragEndEvent,
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
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { ChevronDown, ChevronUp } from "lucide-react";
import type React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "./context";
import type { DraggableVariableProps } from "./draggable-variable";
import { SortableFunction } from "./sortable-function";
import { SortableVariable } from "./sortable-variable";

export interface DraggableFunctionProps {
  id: string;
  name: string;
  content: string;
  position: {
    x: number;
    y: number;
  };
  variables: DraggableVariableProps[];
  viewInside: boolean;
}

export function DraggableFunction({
  id,
  content,
  name,
  position,
}: DraggableFunctionProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    isDragging,
  } = useDraggable({
    id: id,
  });

  const functionNameRef = useRef<HTMLInputElement>(null);

  const { contracts, delFunctionContract, updatePosition, functions } =
    useContext(MyContext);

  const {
    changeFunctionName,
    getFunctionName,
    changeFunctionView,
    getFunctionView,
  } = useContext(MyContext);

  const [inputText, setInputText] = useState(getFunctionName(id));

  const [viewInside, setViewInside] = useState(getFunctionView(id));

  const [variables, setVariables] = useState<DraggableVariableProps[]>([]); // State local pour les fonctions
  const [items, setItems] = useState([
    { id: "1", name: "Variable 1", content: "Variable 1" },
    { id: "2", name: "Variable 2", content: "Variable 1" },
    { id: "3", name: "Variable 3", content: "Variable 1" },
  ]);

  useEffect(() => {
    const contract = contracts.find((contract) => contract.props.id === id);
    if (contract) {
      setVariables(contract.props.functions);
      setItems(variables);
    }
  }, [contracts, id, variables]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    changeFunctionName(id, e.target.value);
  };

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
        //delFunctionContract(id, active.id.toString());
        const func = functions.find((n) => n.props.id === active.id);
        if (func) {
          updatePosition(active.id.toString(), rect.left, rect.top);
        }
        setVariables((prev) => {
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
      className="flex h-fit w-80 flex-col rounded-lg border-2 border-black bg-white font-medium text-black text-sm"
      {...attributes}
    >
      <div className="mt-2 flex h-12 w-full flex-row items-center justify-start">
        {viewInside ? (
          <ChevronUp
            onClick={() => {
              setViewInside(false);
              changeFunctionView(id, false);
            }}
            className="ml-2 w-16"
          />
        ) : (
          <ChevronDown
            onClick={() => {
              setViewInside(true);
              changeFunctionView(id, true);
            }}
            className="ml-2 w-16"
          />
        )}
        <input
          type="text"
          ref={contractNameRef}
          value={inputText}
          onChange={handleInputChange}
          className="ml-2"
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
      {viewInside ? (
        <div className="my-8 flex justify-center">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={items}
              strategy={verticalListSortingStrategy}
            >
              <ul>
                {items.map((item) => (
                  <SortableVariable
                    id={item.id}
                    key={item.id}
                    content={item.name}
                    name={item.name}
                  />
                ))}
              </ul>
            </SortableContext>
          </DndContext>
        </div>
      ) : (
        <div className="my-2" />
      )}
    </div>
  );
}

"use client";

import {
  DndContext,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { Button } from "@acme/ui/button";
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import { MyContext } from "./context";
import { DraggableContract, onDragEndContract } from "./draggable-contract";
import { DraggableFunction } from "./draggable-function";
import { DraggableVariable } from "./draggable-variable";
import { Droppable } from "./droppable";

const initialdraggables: DraggableTypeContent[] = ["contract", "function"];

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type CreateDraggableType<T extends string, F extends (...args: any) => any> = {
  content: T;
  props: Parameters<F>[0];
};

export type FunctionDraggableType = CreateDraggableType<
  "function",
  typeof DraggableFunction
>;
export type ContractDraggableType = CreateDraggableType<
  "contract",
  typeof DraggableContract
>;
export type VariableDraggableType = CreateDraggableType<
  "variable",
  typeof DraggableVariable
>;

type DraggableType =
  | FunctionDraggableType
  | ContractDraggableType
  | VariableDraggableType;

type DraggableTypeContent = DraggableType["content"];

type ListDraggables = DraggableType[];

function AnyDraggableType({ draggable }: { draggable: DraggableType }) {
  if (draggable.content === "function")
    return <DraggableFunction {...draggable.props} />;
  if (draggable.content === "contract")
    return <DraggableContract {...draggable.props} />;
  if (draggable.content === "variable")
    return <DraggableVariable {...draggable.props} />;
  throw Error("Invalid draggable");
}

const fromContentToDraggable = (
  options: Pick<DraggableType, "content" | "props">,
) => {
  if (options.content === "function")
    return {
      ...options,
      props: {
        id: options.props.id,
        content: options.content,
        name: options.content,
        position: options.props.position,
      },
    } as FunctionDraggableType;
  if (options.content === "contract")
    return {
      ...options,
      props: {
        id: options.props.id,
        content: options.content,
        name: options.content,
        position: options.props.position,
      },
    } as ContractDraggableType;
  if (options.content === "variable")
    return {
      ...options,
      props: {
        id: options.props.id,
        content: options.content,
        name: options.content,
        position: options.props.position,
      },
    } as VariableDraggableType;
  throw Error("Invalid content");
};

function onDragEndGetDraggable(ev: DragStartEvent, draggables: ListDraggables) {
  const { active } = ev;
  const draggable = draggables.find((n) => n.props.id === active.id);

  if (!draggable) return null;
  return draggable;
}

export function NoCodeExample() {
  const {
    contracts,
    functions,
    addContract,
    addFunctionToContract,
    addFunction,
    getFunctionName,
    updatePosition,
  } = useContext(MyContext);

  const [draggables, setDraggables] = useState<ListDraggables>([]);

  useEffect(() => {
    const newContracts = contracts.map((contract) => ({
      content: contract.content,
      props: {
        id: contract.props.id,
        name: contract.props.name,
        content: contract.props.content,
        position: contract.props.position,
        functions: contract.props.functions,
        variables: contract.props.variables,
      },
    }));
    const newFunctions = functions.map((functionMap) => ({
      content: functionMap.content,
      props: {
        id: functionMap.props.id,
        name: functionMap.props.name,
        content: functionMap.props.content,
        position: functionMap.props.position,
        variables: functionMap.props.variables,
        viewInside: functionMap.props.viewInside,
      },
    }));
    const newDraggables: ListDraggables = [...newContracts, ...newFunctions];
    setDraggables(newDraggables);
  }, [contracts, functions]);

  const droppableRef = useRef<HTMLDivElement | null>(null); // Reference to the droppable container

  // Clone a note when drag starts
  function handleDragStart(ev: DragStartEvent) {
    const { active } = ev;
    const note = draggables.find((n) => n.props.id === active.id);
  }

  function handleDragEnd(ev: DragEndEvent) {
    onDragEndContract(ev);
    const { active, delta } = ev;
    const draggable = draggables.find((n) => n.props.id === active.id);
    console.log(draggable);

    if (!draggable || !droppableRef.current) return;

    // Calculer la nouvelle position après le drag
    const newPosition = {
      x: draggable.props.position.x + delta.x,
      y: draggable.props.position.y + delta.y,
    };

    // Récupérer les références de tous les draggableContract
    const draggableContractElements = draggables.filter(
      (n) => n.content === "contract",
    );

    // Vérifier la position du draggableFunction par rapport au draggableContract
    if (draggable.content === "function") {
      // Utilisation de for...of au lieu de forEach
      for (const contractNote of draggableContractElements) {
        const draggableFunctionElement = document.getElementById(
          draggable.props.id,
        );
        const draggableContractElement = document.getElementById(
          contractNote.props.id,
        );

        if (draggableFunctionElement && draggableContractElement) {
          const functionRect = draggableFunctionElement.getBoundingClientRect();
          const contractRect = draggableContractElement.getBoundingClientRect();

          // Vérifier si les deux éléments se chevauchent
          const isOverlapping =
            functionRect.left < contractRect.right &&
            functionRect.right > contractRect.left &&
            functionRect.top < contractRect.bottom &&
            functionRect.bottom > contractRect.top;

          if (isOverlapping) {
            console.log(
              "Le DraggableFunction est au-dessus du DraggableContract.",
            );
            setDraggables(
              (prevdraggables) =>
                prevdraggables.filter((n) => n.props.id !== draggable.props.id), // Filtrer le note à supprimer
            );
            handleAddFunctionContract(contractNote.props.id, draggable);
            // Ici, vous pouvez effectuer une action spécifique, comme une mise à jour ou un échange
            return; // Sortir de la boucle dès que l'élément est trouvé
          }
        }
      }
    }

    // Mise à jour de la position du note dans l'état
    const droppableRect = droppableRef.current.getBoundingClientRect();
    const draggableElement = document.getElementById(draggable.props.id);
    const draggableRect = draggableElement?.getBoundingClientRect();

    // Vérifier si le draggable est à l'intérieur du droppable
    if (
      draggableRect &&
      newPosition.x >= droppableRect.left &&
      newPosition.x + draggableRect.width <= droppableRect.right &&
      newPosition.y >= droppableRect.top &&
      newPosition.y + draggableRect.height <= droppableRect.bottom
    ) {
      const updatedNote = {
        ...draggable,
        position: newPosition,
      };
      updatedNote.props.position = newPosition;
      updatePosition(active.id.toString(), newPosition.x, newPosition.y);

      setDraggables((prevdraggables) =>
        prevdraggables.map((n) =>
          n.props.id === updatedNote.props.id ? updatedNote : n,
        ),
      );
    } else {
      console.log(
        "Drag annulé : l'élément n'est pas entièrement à l'intérieur de la zone droppable.",
      );
    }
  }

  const handleAddContract = (
    id: string,
    positionX: number,
    positionY: number,
  ) => {
    const newContract: ContractDraggableType = {
      content: "contract",
      props: {
        id: id,
        name: "contract",
        content: "contract",
        position: {
          x: positionX,
          y: positionY,
        },
        functions: [],
        variables: [],
      },
    };
    console.log("call addContract");
    addContract(newContract);
  };

  const handleAddFunction = (
    id: string,
    positionX: number,
    positionY: number,
  ) => {
    const newFunction: FunctionDraggableType = {
      content: "function",
      props: {
        id: id,
        name: "function",
        content: "function",
        position: {
          x: positionX,
          y: positionY,
        },
        variables: [],
        viewInside: true,
      },
    };
    addFunction(newFunction);
  };

  // Fonction pour ajouter une fonction à un contrat
  const handleAddFunctionContract = (
    contractId: string,
    functionItem: FunctionDraggableType,
  ) => {
    const newFunction: FunctionDraggableType = {
      content: "function",
      props: {
        id: functionItem.props.id,
        name: getFunctionName(functionItem.props.id),
        content: functionItem.props.content,
        position: functionItem.props.position,
        variables: functionItem.props.variables,
        viewInside: functionItem.props.viewInside,
      },
    };
    addFunctionToContract(contractId, newFunction);
  };

  // Function to add a new note at the center of the droppable container
  function handleButtonClick(content: DraggableTypeContent) {
    if (droppableRef.current) {
      const droppableRect = droppableRef.current.getBoundingClientRect();
      const newId = `${content}-${Date.now()}`;
      if (content === "contract") {
        handleAddContract(
          newId,
          droppableRect.left + 25,
          droppableRect.top + 25,
        );
      } else if (content === "function") {
        handleAddFunction(
          newId,
          droppableRect.left + 25,
          droppableRect.top + 25,
        );
      }

      const newDraggable = fromContentToDraggable({
        content,
        props: {
          id: newId,
          name: content,
          content: content,
          position: {
            x: droppableRect.left + 25,
            y: droppableRect.top + 25,
          },
          variables: [],
        },
      });

      setDraggables((prevdraggables) => [...prevdraggables, newDraggable]);
    }
  }

  return (
    <div className="flex w-screen flex-row">
      <div className="flex w-1/6 flex-col justify-center gap-4">
        {initialdraggables.map((content) => (
          <Button
            key={content}
            className="mx-4"
            onClick={() => handleButtonClick(content)}
          >
            {content}
          </Button>
        ))}
      </div>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div
          ref={droppableRef}
          className="mx-4 h-screen w-full justify-center border-2 border-white"
        >
          <Droppable>
            {draggables.map((draggable) => {
              return (
                <AnyDraggableType
                  key={draggable.props.id}
                  draggable={draggable}
                />
              );
            })}
          </Droppable>
        </div>
      </DndContext>
    </div>
  );
}

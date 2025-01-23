import { Button } from "@acme/ui/button";
import { createFileRoute } from "@tanstack/react-router";

import React from "react";

import { PenIcon } from "lucide-react";

export const Route = createFileRoute("/_public/showcase/dnd")({
  component: RouteComponent,
});

import {
  DndContext,
  type DraggableAttributes,
  useDraggable,
} from "@dnd-kit/core";
import type { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { set } from "zod";

function WindowName({
  value,
  onChange,
}: { value: string; onChange: (value: string) => void }) {
  const [isHover, setIsHover] = React.useState(false);

  const [editing, setEditing] = React.useState(false);

  if (editing) {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="bg-white border rounded p-1 h-6 w-[10rem] text-sm"
        onBlur={() => {
          setEditing(false);
          setIsHover(false);
        }}
      />
    );
  }

  return (
    <Button
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      onClick={() => {
        setEditing(true);
      }}
      variant="ghost"
      className="h-6 [&_svg]:size-3 p-0 text-sm"
      size="sm"
    >
      {value}
      {isHover && <PenIcon />}
    </Button>
  );
}

function WindowHeader({
  listeners,
  attributes,
}: {
  listeners: SyntheticListenerMap | undefined;
  attributes: DraggableAttributes;
}) {
  const [name, setName] = React.useState("Contract");

  return (
    <div
      className="flex justify-between bg-gray-50 p-2"
      {...listeners}
      {...attributes}
    >
      <WindowName value={name} onChange={setName} />
      <div className="flex items-center gap-1">
        <Button className="size-3 rounded-full p-0 bg-blue-500 hover:bg-blue-500/90 [&_svg]:size-2" />
        <Button className="size-3 rounded-full p-0 bg-yellow-500 hover:bg-yellow-500/90 [&_svg]:size-2" />
        <Button className="size-3 rounded-full p-0 bg-green-500 hover:bg-green-500/90 [&_svg]:size-2" />
        <Button className="size-3 rounded-full p-0 bg-red-500 hover:bg-red-500/90 [&_svg]:size-2" />
      </div>
    </div>
  );
}

function Window({
  id,
  position: { x, y },
}: {
  id: string | number;
  position: { x: number; y: number };
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    top: y,
    left: x,
  };

  return (
    <div
      className="rounded-lg border overflow-hidden w-[30rem] absolute"
      style={style}
      ref={setNodeRef}
    >
      <WindowHeader attributes={attributes} listeners={listeners} />
      <div className="p-2">Hello World</div>
    </div>
  );
}

type Window = {
  name: string;
  position: { x: number; y: number };
};

type WindowCanva = {
  id: string | number;
} & Window;

interface CanvaContextValue {
  lastId: number;
  setLastId: React.Dispatch<React.SetStateAction<number>>;
  windows: WindowCanva[];
  setWindows: React.Dispatch<React.SetStateAction<WindowCanva[]>>;
}

const CanvaContext = React.createContext<CanvaContextValue | null>(null);

function CanvaProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = React.useState<WindowCanva[]>([]);
  const [lastId, setLastId] = React.useState(0);

  return (
    <CanvaContext.Provider value={{ lastId, setLastId, windows, setWindows }}>
      <DndContext>{children}</DndContext>
    </CanvaContext.Provider>
  );
}

function useCanva() {
  const context = React.useContext(CanvaContext);

  if (!context) {
    throw new Error("useWindows must be used within CanvaProvider");
  }

  const { windows, setWindows, setLastId, lastId } = context;

  const addWindow = (window: WindowCanva) => {
    if (windows.some((w) => w.id === window.id)) {
      throw new Error(`Window with id ${window.id} already exists`);
    }
    setWindows((windows) => [...windows, window]);
  };

  const newWindow = (window: Window) => {
    const id = lastId + 1;
    setLastId(id);
    addWindow({ ...window, id });
  };

  const removeWindow = (id: string | number) => {
    setWindows((windows) => windows.filter((window) => window.id !== id));
  };

  return { windows, setWindows, addWindow, removeWindow, newWindow };
}

function RouteComponent() {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  return (
    <div className="flex">
      <div className="h-dvh w-[16rem] bg-sidebar border-r border-sidebar-border p-4" />
      <DndContext
        onDragEnd={({ delta }) => {
          console.log("Drag end");
          setPosition(({ x, y }) => ({
            x: x + delta.x,
            y: y + delta.y,
          }));
        }}
      >
        <main className="h-dvh relative">
          <Window id={0} position={position} />
        </main>
      </DndContext>
    </div>
  );
}

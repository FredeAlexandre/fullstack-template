import { createFileRoute } from "@tanstack/react-router";

import { fromAstToSolidity, fromSolidityToAst } from "@acme/jsonlidity";
import { Button } from "@acme/ui/button";
import { Textarea } from "@acme/ui/textarea";
import { EraserIcon, PlayIcon, RefreshCwIcon } from "lucide-react";
import React from "react";

export const Route = createFileRoute("/_public/showcase/jsonlidity")({
  component: RouteComponent,
});

function TextareSandbox({
  value,
  onChange,
  name,
}: { name: string; value: string; onChange: (value: string) => void }) {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between rounded-t border-x border-t p-2">
        <span className="font-semibold text-lg">{name}</span>
        <div className="flex gap-1">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              onChange("");
            }}
          >
            <EraserIcon className="size-4" />
          </Button>
        </div>
      </div>
      <Textarea
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="whitespace-pre rounded-t-none"
        rows={30}
      />
    </div>
  );
}

function RouteComponent() {
  const [json, setJson] = React.useState("");
  const [solidity, setSoldity] = React.useState("");
  const [direction, setDirection] = React.useState<
    "json-to-solidity" | "solidity-to-json"
  >("json-to-solidity");

  return (
    <div className="p-10">
      <h1 className="font-bold text-xl">Jsonlidity Convertion</h1>
      <p className="text-muted-foreground">
        Jsonlidity convert AST code to solidity source code and reversly
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              if (direction === "json-to-solidity") {
                setDirection("solidity-to-json");
              } else {
                setDirection("json-to-solidity");
              }
            }}
          >
            <RefreshCwIcon className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={async () => {
              if (direction === "json-to-solidity") {
                setSoldity(fromAstToSolidity(JSON.parse(json)));
              } else {
                setJson(JSON.stringify(fromSolidityToAst(solidity), null, 2));
              }
            }}
          >
            <PlayIcon className="size-4" />
          </Button>
        </div>
        <div className="jsutify-between flex gap-2">
          {direction === "json-to-solidity" ? (
            <>
              <TextareSandbox name="AST" value={json} onChange={setJson} />
              <TextareSandbox
                name="Solidity"
                value={solidity}
                onChange={setSoldity}
              />
            </>
          ) : (
            <>
              <TextareSandbox
                name="Solidity"
                value={solidity}
                onChange={setSoldity}
              />
              <TextareSandbox name="AST" value={json} onChange={setJson} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

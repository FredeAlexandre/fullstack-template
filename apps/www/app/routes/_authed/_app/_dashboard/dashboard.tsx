import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import type { z } from "zod";

import { Button } from "@acme/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@acme/ui/dialog";
import { Input } from "@acme/ui/input";
import { Label } from "@acme/ui/label";

import {
  createProjectFn,
  userProjectsQueryOptions,
} from "~/utils/queries/project";

import { useServerFn } from "@tanstack/start";
import { LoaderCircleIcon } from "lucide-react";

export const Route = createFileRoute("/_authed/_app/_dashboard/dashboard")({
  component: RouteComponent,
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(userProjectsQueryOptions());
  },
});

function CreateProjectButton() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState<undefined | string>(undefined);
  const [open, setOpen] = useState(false);

  const queryClient = useQueryClient();

  const { mutate: createProject, isPending } = useMutation({
    mutationFn: useServerFn(createProjectFn),
    onSuccess: () => {
      setOpen(false);
      queryClient.invalidateQueries(userProjectsQueryOptions());
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add project</DialogTitle>
          <DialogDescription>
            Create a new project to your project list.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="name"
              placeholder="Uniswap V5"
              className="col-span-3"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="description">Description</Label>
            <Input
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              id="description"
              placeholder="The next generation of exchange"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            disabled={isPending}
            onClick={() => createProject({ data: { name, description } })}
          >
            {isPending ? (
              <LoaderCircleIcon className="animate-spin size-4" />
            ) : (
              "Create project"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function RouteComponent() {
  const { data } = useSuspenseQuery(userProjectsQueryOptions());

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex gap-2">
        <Input placeholder="Search projects" className="bg-background" />
        <CreateProjectButton />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data
          ? data.map((project) => (
              <div
                key={project.id}
                className="border rounded p-4 w-full bg-background"
              >
                <div>{project.name}</div>
                <div className="text-sm text-muted-foreground">
                  {project.description}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

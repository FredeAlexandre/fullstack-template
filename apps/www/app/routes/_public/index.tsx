import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@acme/ui/button";

export const Route = createFileRoute("/_public/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="pt-[12rem] flex flex-col justify-center items-center gap-4">
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <div className="flex gap-2">
        <Button asChild variant="ghost">
          <Link to="/signin">Sign In</Link>
        </Button>
        <Button asChild>
          <Link to="/signup">Sign Up</Link>
        </Button>
      </div>
    </div>
  );
}

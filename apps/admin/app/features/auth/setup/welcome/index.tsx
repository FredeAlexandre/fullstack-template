import { Card } from "@/components/ui/card";
import AuthLayout from "@/features/auth/auth-layout";
import { AdminCreationForm } from "./components/admin-creation-form";

export default function Welcome() {
  return (
    <AuthLayout>
      <Card className="p-6 sm:w-[500px]">
        <div className="mb-2 flex flex-col space-y-2 text-left">
          <h1 className="text-md font-semibold tracking-tight">Welcome</h1>
          <p className="text-sm text-muted-foreground">
            Welcome to Acme. Setup the first admin account to get started
          </p>
        </div>
        <AdminCreationForm />
      </Card>
    </AuthLayout>
  );
}

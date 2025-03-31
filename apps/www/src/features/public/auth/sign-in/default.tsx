import { Button } from "@acme/ui/button";
import { Checkbox } from "@acme/ui/checkbox";
import { Input } from "@acme/ui/input";
import { Label } from "@acme/ui/label";
import { Link } from "@tanstack/react-router";
import { useId } from "react";

import { useForm } from "@tanstack/react-form";
import type { AnyFieldApi } from "@tanstack/react-form";

export default function SignInPage() {
	const id = useId();

	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		onSubmit: async ({ value }) => {
			// Do something with form data
			console.log(value);
		},
	});

	return (
		<div className="flex items-center justify-center pt-50">
			<div className="w-120 space-y-4 rounded-xl border p-6">
				<div className="flex flex-col items-center gap-2">
					<Logo />
					<div className="flex flex-col gap-2 text-center sm:text-left">
						<header className="font-semibold text-lg leading-none sm:text-center">
							Welcome back
						</header>
						<p className="text-muted-foreground text-sm sm:text-center">
							Enter your credentials to login to your account.
						</p>
					</div>
				</div>

				<form className="space-y-5">
					<div className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor={`${id}-email`}>Email</Label>
							<Input
								id={`${id}-email`}
								placeholder="hi@yourcompany.com"
								type="email"
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor={`${id}-password`}>Password</Label>
							<Input
								id={`${id}-password`}
								placeholder="Enter your password"
								type="password"
								required
							/>
						</div>
					</div>
					<div className="flex justify-between gap-2">
						<div className="flex items-center gap-2">
							<Checkbox id={`${id}-remember`} />
							<Label
								htmlFor={`${id}-remember`}
								className="font-normal text-muted-foreground"
							>
								Remember me
							</Label>
						</div>
						<Link
							to="/auth/forget-password"
							className="text-sm underline hover:no-underline"
						>
							Forgot password?
						</Link>
					</div>
					<Button type="button" className="w-full">
						Sign in
					</Button>
				</form>

				<div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
					<span className="text-muted-foreground text-xs">Or</span>
				</div>

				<Button asChild type="button" variant="outline" className="w-full">
					<Link to="/auth/sign-up">Create account</Link>
				</Button>
			</div>
		</div>
	);
}

function Logo() {
	return (
		<div
			className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
			aria-hidden="true"
		>
			<svg
				className="stroke-zinc-800 dark:stroke-zinc-100"
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 32 32"
				aria-hidden="true"
			>
				<circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
			</svg>
		</div>
	);
}

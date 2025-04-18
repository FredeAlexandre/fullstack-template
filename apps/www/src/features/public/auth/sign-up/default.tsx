import { useForm } from "@tanstack/react-form";
import { Link } from "@tanstack/react-router";
import { Inbox } from "lucide-react";
import { useState } from "react";

import { Button } from "@acme/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@acme/ui/dialog";
import { Input } from "@acme/ui/input";
import { Label } from "@acme/ui/label";

import { authClient } from "~/lib/auth-client";
import { uniqueUsername } from "~/lib/unique-username";

import { FieldInfo } from "~/components/field-info";

import { toast } from "sonner";

export default function SignUpPage() {
	const [isDialogOpen, setDialogOpen] = useState(false);
	const [email, setEmail] = useState("");

	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
			name: "",
		},
		onSubmit: async ({ value: { email, password, name } }) => {
			await authClient.signUp.email(
				{
					email,
					password,
					name,
					username: uniqueUsername(),
					callbackURL: "/app",
				},
				{
					onSuccess: (ctx) => {
						setEmail(email);
						setDialogOpen(true);
					},
					onError: (ctx) => {
						console.log(ctx.error.message);
						toast.error(ctx.error.message);
					},
				},
			);
		},
	});

	return (
		<>
			<Dialog
				open={isDialogOpen}
				onOpenChange={(value) => {
					if (value === false) {
						setEmail("");
					}
					setDialogOpen(value);
				}}
			>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Sign up, sucess !</DialogTitle>
					</DialogHeader>
					<div className="flex aspect-square w-full flex-col items-center justify-center gap-4">
						<div className="flex w-fit justify-center rounded-full bg-green-500 p-10">
							<Inbox className="size-20 text-white" />
						</div>
						<span className="w-100 text-center text-muted-foreground text-sm">
							An email was sent to your email {email}, go check your inbox to
							verify your account !
						</span>
					</div>
				</DialogContent>
			</Dialog>
			<div className="flex items-center justify-center pt-50">
				<div className="w-120 space-y-4 rounded-xl border p-6">
					<div className="flex flex-col items-center gap-2">
						<Logo />
						<div className="flex flex-col gap-2 text-center sm:text-left">
							<header className="font-semibold text-lg leading-none sm:text-center">
								Sign Up Acme
							</header>
							<p className="text-muted-foreground text-sm sm:text-center">
								We just need a few details to get you started.
							</p>
						</div>
					</div>

					<form
						onSubmit={(e) => {
							e.preventDefault();
							e.stopPropagation();
							form.handleSubmit();
						}}
						className="space-y-5"
					>
						<div className="space-y-4">
							<div className="space-y-2">
								<form.Field
									name="name"
									// biome-ignore lint/correctness/noChildrenProp: Pass as props to have the field
									children={(field) => (
										<>
											<div className="flex items-center justify-between">
												<Label htmlFor={field.name}>Full name</Label>
												<FieldInfo field={field} />
											</div>
											<Input
												id={field.name}
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												placeholder="John Doe"
												type="text"
												required
											/>
										</>
									)}
								/>
							</div>
							<div className="space-y-2">
								<form.Field
									name="email"
									// biome-ignore lint/correctness/noChildrenProp: Pass as props to have the field
									children={(field) => (
										<>
											<div className="flex items-center justify-between">
												<Label htmlFor={field.name}>Email</Label>
												<FieldInfo field={field} />
											</div>
											<Input
												id={field.name}
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												placeholder="hi@yourcompany.com"
												type="email"
												required
											/>
										</>
									)}
								/>
							</div>
							<div className="space-y-2">
								<form.Field
									name="password"
									// biome-ignore lint/correctness/noChildrenProp: Pass as props to have the field
									children={(field) => (
										<>
											<div className="flex items-center justify-between">
												<Label htmlFor={field.name}>Password</Label>
												<FieldInfo field={field} />
											</div>
											<Input
												id={field.name}
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												placeholder="Enter your password"
												type="password"
												required
											/>
										</>
									)}
								/>
							</div>
						</div>
						<form.Subscribe
							selector={(state) => [state.canSubmit, state.isSubmitting]}
							// biome-ignore lint/correctness/noChildrenProp: Pass as props to have data
							children={([canSubmit, isSubmitting]) => (
								<Button type="submit" disabled={!canSubmit} className="w-full">
									{isSubmitting ? "..." : "Create Account"}
								</Button>
							)}
						/>
					</form>

					<div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
						<span className="text-muted-foreground text-xs">Or</span>
					</div>

					<Button asChild type="button" variant="outline" className="w-full">
						<Link to="/auth/sign-in">Sign in</Link>
					</Button>
				</div>
			</div>
		</>
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

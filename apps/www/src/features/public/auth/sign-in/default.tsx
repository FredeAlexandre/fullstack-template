import { useForm } from "@tanstack/react-form";
import { Link, useNavigate } from "@tanstack/react-router";

import { Button } from "@acme/ui/button";
import { Checkbox } from "@acme/ui/checkbox";
import { Input } from "@acme/ui/input";
import { Label } from "@acme/ui/label";

import { FieldInfo } from "~/components/field-info";
import { authClient } from "~/lib/auth-client";
import { isEmail } from "~/lib/is-email";

import { toast } from "sonner";

export default function SignInPage() {
	const navigate = useNavigate({ from: "/auth/sign-in" });

	const form = useForm({
		defaultValues: {
			emailOrUsername: "",
			password: "",
			rememberMe: false,
		},
		onSubmit: async ({ value: { emailOrUsername, password, rememberMe } }) => {
			if (isEmail(emailOrUsername)) {
				await authClient.signIn.email(
					{
						email: emailOrUsername,
						password,
						rememberMe,
						callbackURL: "/app",
					},
					{
						onSuccess: async (ctx) => {
							await navigate({ to: "/app" });
						},
						onError: (ctx) => {
							toast.error(ctx.error.message);
						},
					},
				);
			} else {
				await authClient.signIn.username(
					{
						username: emailOrUsername,
						password,
						rememberMe,
					},
					{
						onSuccess: async (ctx) => {
							await navigate({ to: "/app" });
						},
						onError: (ctx) => {
							toast.error(ctx.error.message);
						},
					},
				);
			}
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
								name="emailOrUsername"
								// biome-ignore lint/correctness/noChildrenProp: Pass as props to have the field
								children={(field) => (
									<>
										<div className="flex items-center justify-between">
											<Label htmlFor={field.name}>Email/Username</Label>
											<FieldInfo field={field} />
										</div>
										<Input
											id={field.name}
											name={field.name}
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											placeholder="hi@yourcompany.com"
											type="text"
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
					<div className="flex justify-between gap-2">
						<div className="flex items-center gap-2">
							<form.Field
								name="rememberMe"
								// biome-ignore lint/correctness/noChildrenProp: Pass as props to have the field
								children={(field) => (
									<>
										<Checkbox
											checked={field.state.value}
											onCheckedChange={(value) => {
												if (value === "indeterminate") return;
												field.handleChange(value);
											}}
											id={field.name}
										/>
										<Label
											htmlFor={field.name}
											className="font-normal text-muted-foreground"
										>
											Remember me
										</Label>
									</>
								)}
							/>
						</div>
						<Link
							to="/auth/forget-password"
							className="text-sm underline hover:no-underline"
						>
							Forgot password?
						</Link>
					</div>

					<form.Subscribe
						selector={(state) => [state.canSubmit, state.isSubmitting]}
						// biome-ignore lint/correctness/noChildrenProp: Pass as props to have data
						children={([canSubmit, isSubmitting]) => (
							<Button type="submit" disabled={!canSubmit} className="w-full">
								{isSubmitting ? "..." : "Sign in"}
							</Button>
						)}
					/>
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

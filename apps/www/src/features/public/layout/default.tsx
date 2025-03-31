import { Button } from "@acme/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@acme/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";

import { Link, Outlet } from "@tanstack/react-router";
import type { To } from "~/lib/types";

type Item = { title: string; href: string } | { title: string; to: To };
type Navigation = {
	title: string;
	description: string;
	items: Item[];
};

export default function PublicLayout({
	children,
}: { children?: React.ReactNode }) {
	const navigationItems: Navigation[] = [
		{
			title: "Products",
			description: "Managing a small business today is already tough.",
			items: [
				{
					title: "Reports",
					href: "/reports",
				},
				{
					title: "Statistics",
					href: "/statistics",
				},
				{
					title: "Dashboards",
					href: "/dashboards",
				},
				{
					title: "Recordings",
					href: "/recordings",
				},
			],
		},
		{
			title: "Solutions",
			description: "Managing a small business today is already tough.",
			items: [
				{
					title: "About us",
					href: "/about",
				},
				{
					title: "Fundraising",
					href: "/fundraising",
				},
				{
					title: "Investors",
					href: "/investors",
				},
				{
					title: "Contact us",
					href: "/contact",
				},
			],
		},
	];

	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<header className="fixed top-0 left-0 z-40 w-full border-b bg-background">
				<div className="container relative mx-auto flex min-h-20 flex-row items-center gap-4 lg:grid lg:grid-cols-3">
					<div className="hidden flex-row items-center justify-start gap-4 lg:flex">
						<NavigationMenu className="flex items-start justify-start">
							<NavigationMenuList className="flex flex-row justify-start gap-4">
								{navigationItems.map((nav) => (
									<NavigationMenuItem key={nav.title}>
										<>
											<NavigationMenuTrigger className="font-medium text-sm">
												{nav.title}
											</NavigationMenuTrigger>
											<NavigationMenuContent className="!w-[450px] p-4">
												<div className="flex grid-cols-2 flex-col gap-4 lg:grid">
													<div className="flex h-full flex-col justify-between">
														<div className="flex flex-col">
															<p className="text-base">{nav.title}</p>
															<p className="text-muted-foreground text-sm">
																{nav.description}
															</p>
														</div>
														<Button size="sm" className="mt-10">
															Book a call today
														</Button>
													</div>
													<div className="flex h-full flex-col justify-end text-sm">
														{nav.items.map((item) =>
															"href" in item ? (
																<NavigationMenuLink
																	href={item.href}
																	key={item.title}
																	className="flex flex-row items-center justify-between rounded px-4 py-2 hover:bg-muted"
																>
																	<span>{item.title}</span>
																	<MoveRight className="h-4 w-4 text-muted-foreground" />
																</NavigationMenuLink>
															) : (
																<NavigationMenuLink
																	asChild
																	key={item.title}
																	className="flex flex-row items-center justify-between rounded px-4 py-2 hover:bg-muted"
																>
																	<Link to={item.to}>
																		<span>{item.title}</span>
																		<MoveRight className="h-4 w-4 text-muted-foreground" />
																	</Link>
																</NavigationMenuLink>
															),
														)}
													</div>
												</div>
											</NavigationMenuContent>
										</>
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu>
					</div>
					<div className="flex lg:justify-center">
						<Link to="/">
							<p className="font-semibold">Acme</p>
						</Link>
					</div>
					<div className="flex w-full justify-end gap-4">
						<Button variant="outline" asChild>
							<Link to="/auth/sign-in">Sign in</Link>
						</Button>
						<Button asChild>
							<Link to="/auth/sign-up">Sign up</Link>
						</Button>
					</div>
					<div className="flex w-12 shrink items-end justify-end lg:hidden">
						<Button variant="ghost" onClick={() => setOpen(!isOpen)}>
							{isOpen ? (
								<X className="h-5 w-5" />
							) : (
								<Menu className="h-5 w-5" />
							)}
						</Button>
						{isOpen && (
							<div className="container absolute top-20 right-0 flex w-full flex-col gap-8 border-t bg-background py-4 shadow-lg">
								{navigationItems.map((nav) => (
									<div key={nav.title}>
										<div className="flex flex-col gap-2">
											{nav.items.map((item) =>
												"href" in item ? (
													<a
														key={item.title}
														href={item.href}
														className="flex items-center justify-between"
													>
														<span className="text-muted-foreground">
															{item.title}
														</span>
														<MoveRight className="h-4 w-4 stroke-1" />
													</a>
												) : (
													<Link
														key={item.title}
														to={item.to}
														className="flex items-center justify-between"
													>
														<span className="text-muted-foreground">
															{item.title}
														</span>
														<MoveRight className="h-4 w-4 stroke-1" />
													</Link>
												),
											)}
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</header>
			<Outlet />
		</>
	);
}

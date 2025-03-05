import { cn } from "@acme/ui";
import { Badge } from "@acme/ui/badge";
import { Button } from "@acme/ui/button";
import { Checkbox } from "@acme/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@acme/ui/dropdown-menu";
import type { ColumnDef, FilterFn, Row } from "@tanstack/react-table";
import { Ellipsis } from "lucide-react";
import type { Item } from "./types";

// Custom filter function for multi-column searching
const multiColumnFilterFn: FilterFn<Item> = (row, columnId, filterValue) => {
	const searchableRowContent =
		`${row.original.name} ${row.original.email}`.toLowerCase();
	const searchTerm = (filterValue ?? "").toLowerCase();
	return searchableRowContent.includes(searchTerm);
};

const statusFilterFn: FilterFn<Item> = (
	row,
	columnId,
	filterValue: string[],
) => {
	if (!filterValue?.length) return true;
	const status = row.getValue(columnId) as string;
	return filterValue.includes(status);
};

export const columns: ColumnDef<Item>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		size: 28,
		enableSorting: false,
		enableHiding: false,
	},
	{
		header: "Name",
		accessorKey: "name",
		cell: ({ row }) => (
			<div className="font-medium">{row.getValue("name")}</div>
		),
		size: 180,
		filterFn: multiColumnFilterFn,
		enableHiding: false,
	},
	{
		header: "Email",
		accessorKey: "email",
		size: 220,
	},
	{
		header: "Location",
		accessorKey: "location",
		cell: ({ row }) => (
			<div>
				<span className="text-lg leading-none">{row.original.flag}</span>{" "}
				{row.getValue("location")}
			</div>
		),
		size: 180,
	},
	{
		header: "Status",
		accessorKey: "status",
		cell: ({ row }) => (
			<Badge
				className={cn(
					row.getValue("status") === "Inactive" &&
						"bg-muted-foreground/60 text-primary-foreground",
				)}
			>
				{row.getValue("status")}
			</Badge>
		),
		size: 100,
		filterFn: statusFilterFn,
	},
	{
		header: "Performance",
		accessorKey: "performance",
	},
	{
		header: "Balance",
		accessorKey: "balance",
		cell: ({ row }) => {
			const amount = Number.parseFloat(row.getValue("balance"));
			const formatted = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(amount);
			return formatted;
		},
		size: 120,
	},
	{
		id: "actions",
		header: () => <span className="sr-only">Actions</span>,
		cell: ({ row }) => <RowActions row={row} />,
		size: 60,
		enableHiding: false,
	},
];

function RowActions({ row }: { row: Row<Item> }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className="flex justify-end">
					<Button
						size="icon"
						variant="ghost"
						className="shadow-none"
						aria-label="Edit item"
					>
						<Ellipsis size={16} strokeWidth={2} aria-hidden="true" />
					</Button>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<span>Edit</span>
						<DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<span>Duplicate</span>
						<DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<span>Archive</span>
						<DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuItem>Move to project</DropdownMenuItem>
								<DropdownMenuItem>Move to folder</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>Advanced options</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>Share</DropdownMenuItem>
					<DropdownMenuItem>Add to favorites</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="text-destructive focus:text-destructive">
					<span>Delete</span>
					<DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

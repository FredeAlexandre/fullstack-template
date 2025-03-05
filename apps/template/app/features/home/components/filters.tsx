import { cn } from "@acme/ui";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@acme/ui/alert-dialog";
import { Button } from "@acme/ui/button";
import { Checkbox } from "@acme/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@acme/ui/dropdown-menu";
import { Input } from "@acme/ui/input";
import { Label } from "@acme/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@acme/ui/popover";
import {
	CircleAlert,
	CircleX,
	Columns3,
	Filter,
	ListFilter,
	Plus,
	Trash,
} from "lucide-react";
import { useMemo, useRef } from "react";

import { useTable } from "../context";

export function Filters() {
	const { id, data, setData, table } = useTable();
	const inputRef = useRef<HTMLInputElement>(null);

	const handleDeleteRows = () => {
		const selectedRows = table.getSelectedRowModel().rows;
		const updatedData = data.filter(
			(item) => !selectedRows.some((row) => row.original.id === item.id),
		);
		setData(updatedData);
		table.resetRowSelection();
	};

	// Get unique status values
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const uniqueStatusValues = useMemo(() => {
		const statusColumn = table.getColumn("status");

		if (!statusColumn) return [];

		const values = Array.from(statusColumn.getFacetedUniqueValues().keys());

		return values.sort();
	}, [table.getColumn("status")?.getFacetedUniqueValues()]);

	// Get counts for each status
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const statusCounts = useMemo(() => {
		const statusColumn = table.getColumn("status");
		if (!statusColumn) return new Map();
		return statusColumn.getFacetedUniqueValues();
	}, [table.getColumn("status")?.getFacetedUniqueValues()]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const selectedStatuses = useMemo(() => {
		const filterValue = table.getColumn("status")?.getFilterValue() as string[];
		return filterValue ?? [];
	}, [table.getColumn("status")?.getFilterValue()]);

	const handleStatusChange = (checked: boolean, value: string) => {
		const filterValue = table.getColumn("status")?.getFilterValue() as string[];
		const newFilterValue = filterValue ? [...filterValue] : [];

		if (checked) {
			newFilterValue.push(value);
		} else {
			const index = newFilterValue.indexOf(value);
			if (index > -1) {
				newFilterValue.splice(index, 1);
			}
		}

		table
			.getColumn("status")
			?.setFilterValue(newFilterValue.length ? newFilterValue : undefined);
	};

	return (
		<div className="flex flex-wrap items-center justify-between gap-3">
			<div className="flex items-center gap-3">
				{/* Filter by name or email */}
				<div className="relative">
					<Input
						id={`${id}-input`}
						ref={inputRef}
						className={cn(
							"peer min-w-60 ps-9",
							Boolean(table.getColumn("name")?.getFilterValue()) && "pe-9",
						)}
						value={(table.getColumn("name")?.getFilterValue() ?? "") as string}
						onChange={(e) =>
							table.getColumn("name")?.setFilterValue(e.target.value)
						}
						placeholder="Filter by name or email..."
						type="text"
						aria-label="Filter by name or email"
					/>
					<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
						<ListFilter size={16} strokeWidth={2} aria-hidden="true" />
					</div>
					{Boolean(table.getColumn("name")?.getFilterValue()) && (
						// biome-ignore lint/a11y/useButtonType: <explanation>
						<button
							className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
							aria-label="Clear filter"
							onClick={() => {
								table.getColumn("name")?.setFilterValue("");
								if (inputRef.current) {
									inputRef.current.focus();
								}
							}}
						>
							<CircleX size={16} strokeWidth={2} aria-hidden="true" />
						</button>
					)}
				</div>
				{/* Filter by status */}
				<Popover>
					<PopoverTrigger asChild>
						<Button variant="outline">
							<Filter
								className="-ms-1 me-2 opacity-60"
								size={16}
								strokeWidth={2}
								aria-hidden="true"
							/>
							Status
							{selectedStatuses.length > 0 && (
								<span className="-me-1 ms-3 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] font-medium text-[0.625rem] text-muted-foreground/70">
									{selectedStatuses.length}
								</span>
							)}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="min-w-36 p-3" align="start">
						<div className="space-y-3">
							<div className="font-medium text-muted-foreground text-xs">
								Filters
							</div>
							<div className="space-y-3">
								{uniqueStatusValues.map((value, i) => (
									<div key={value} className="flex items-center gap-2">
										<Checkbox
											id={`${id}-${i}`}
											checked={selectedStatuses.includes(value)}
											onCheckedChange={(checked: boolean) =>
												handleStatusChange(checked, value)
											}
										/>
										<Label
											htmlFor={`${id}-${i}`}
											className="flex grow justify-between gap-2 font-normal"
										>
											{value}{" "}
											<span className="ms-2 text-muted-foreground text-xs">
												{statusCounts.get(value)}
											</span>
										</Label>
									</div>
								))}
							</div>
						</div>
					</PopoverContent>
				</Popover>
				{/* Toggle columns visibility */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline">
							<Columns3
								className="-ms-1 me-2 opacity-60"
								size={16}
								strokeWidth={2}
								aria-hidden="true"
							/>
							View
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
						{table
							.getAllColumns()
							.filter((column) => column.getCanHide())
							.map((column) => {
								return (
									<DropdownMenuCheckboxItem
										key={column.id}
										className="capitalize"
										checked={column.getIsVisible()}
										onCheckedChange={(value) =>
											column.toggleVisibility(!!value)
										}
										onSelect={(event) => event.preventDefault()}
									>
										{column.id}
									</DropdownMenuCheckboxItem>
								);
							})}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div className="flex items-center gap-3">
				{/* Delete button */}
				{table.getSelectedRowModel().rows.length > 0 && (
					<AlertDialog>
						<AlertDialogTrigger asChild>
							<Button className="ml-auto" variant="outline">
								<Trash
									className="-ms-1 me-2 opacity-60"
									size={16}
									strokeWidth={2}
									aria-hidden="true"
								/>
								Delete
								<span className="-me-1 ms-3 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] font-medium text-[0.625rem] text-muted-foreground/70">
									{table.getSelectedRowModel().rows.length}
								</span>
							</Button>
						</AlertDialogTrigger>
						<AlertDialogContent>
							<div className="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
								<div
									className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border"
									aria-hidden="true"
								>
									<CircleAlert
										className="opacity-80"
										size={16}
										strokeWidth={2}
									/>
								</div>
								<AlertDialogHeader>
									<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
									<AlertDialogDescription>
										This action cannot be undone. This will permanently delete{" "}
										{table.getSelectedRowModel().rows.length} selected{" "}
										{table.getSelectedRowModel().rows.length === 1
											? "row"
											: "rows"}
										.
									</AlertDialogDescription>
								</AlertDialogHeader>
							</div>
							<AlertDialogFooter>
								<AlertDialogCancel>Cancel</AlertDialogCancel>
								<AlertDialogAction onClick={handleDeleteRows}>
									Delete
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				)}
				{/* Add user button */}
				<Button className="ml-auto" variant="outline">
					<Plus
						className="-ms-1 me-2 opacity-60"
						size={16}
						strokeWidth={2}
						aria-hidden="true"
					/>
					Add user
				</Button>
			</div>
		</div>
	);
}

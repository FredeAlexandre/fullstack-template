import { cn } from "@acme/ui";
import {
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	Table as TanTable,
} from "@acme/ui/table";
import { flexRender } from "@tanstack/react-table";
import { ChevronDown, ChevronUp } from "lucide-react";

import { columns } from "../columns";

import { useTable } from "../context";

export function Table() {
	const { table } = useTable();

	return (
		<div className="overflow-hidden rounded-lg border border-border bg-background">
			<TanTable className="table-fixed">
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id} className="hover:bg-transparent">
							{headerGroup.headers.map((header) => {
								return (
									<TableHead
										key={header.id}
										style={{ width: `${header.getSize()}px` }}
										className="h-11"
									>
										{header.isPlaceholder ? null : header.column.getCanSort() ? (
											<div
												className={cn(
													header.column.getCanSort() &&
														"flex h-full cursor-pointer select-none items-center justify-between gap-2",
												)}
												onClick={header.column.getToggleSortingHandler()}
												onKeyDown={(e) => {
													// Enhanced keyboard handling for sorting
													if (
														header.column.getCanSort() &&
														(e.key === "Enter" || e.key === " ")
													) {
														e.preventDefault();
														header.column.getToggleSortingHandler()?.(e);
													}
												}}
												tabIndex={header.column.getCanSort() ? 0 : undefined}
											>
												{flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
												{{
													asc: (
														<ChevronUp
															className="shrink-0 opacity-60"
															size={16}
															strokeWidth={2}
															aria-hidden="true"
														/>
													),
													desc: (
														<ChevronDown
															className="shrink-0 opacity-60"
															size={16}
															strokeWidth={2}
															aria-hidden="true"
														/>
													),
												}[header.column.getIsSorted() as string] ?? null}
											</div>
										) : (
											flexRender(
												header.column.columnDef.header,
												header.getContext(),
											)
										)}
									</TableHead>
								);
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								data-state={row.getIsSelected() && "selected"}
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id} className="last:py-0">
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className="h-24 text-center">
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</TanTable>
		</div>
	);
}

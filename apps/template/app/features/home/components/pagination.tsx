import { Button } from "@acme/ui/button";
import { Label } from "@acme/ui/label";
import {
	PaginationContent,
	PaginationItem,
	Pagination as ShadcnPagination,
} from "@acme/ui/pagination";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@acme/ui/select";
import {
	ChevronFirst,
	ChevronLast,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";

import { useTable } from "../context";

export function Pagination() {
	const { id, table } = useTable();

	return (
		<div className="flex items-center justify-between gap-8">
			{/* Results per page */}
			<div className="flex items-center gap-3">
				<Label htmlFor={id} className="max-sm:sr-only">
					Rows per page
				</Label>
				<Select
					value={table.getState().pagination.pageSize.toString()}
					onValueChange={(value) => {
						table.setPageSize(Number(value));
					}}
				>
					<SelectTrigger id={id} className="w-fit whitespace-nowrap">
						<SelectValue placeholder="Select number of results" />
					</SelectTrigger>
					<SelectContent className="[&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8">
						{[5, 10, 25, 50].map((pageSize) => (
							<SelectItem key={pageSize} value={pageSize.toString()}>
								{pageSize}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			{/* Page number information */}
			<div className="flex grow justify-end whitespace-nowrap text-muted-foreground text-sm">
				<p
					className="whitespace-nowrap text-muted-foreground text-sm"
					aria-live="polite"
				>
					<span className="text-foreground">
						{table.getState().pagination.pageIndex *
							table.getState().pagination.pageSize +
							1}
						-
						{Math.min(
							Math.max(
								table.getState().pagination.pageIndex *
									table.getState().pagination.pageSize +
									table.getState().pagination.pageSize,
								0,
							),
							table.getRowCount(),
						)}
					</span>{" "}
					of{" "}
					<span className="text-foreground">
						{table.getRowCount().toString()}
					</span>
				</p>
			</div>

			{/* Pagination buttons */}
			<div>
				<ShadcnPagination>
					<PaginationContent>
						{/* First page button */}
						<PaginationItem>
							<Button
								size="icon"
								variant="outline"
								className="disabled:pointer-events-none disabled:opacity-50"
								onClick={() => table.firstPage()}
								disabled={!table.getCanPreviousPage()}
								aria-label="Go to first page"
							>
								<ChevronFirst size={16} strokeWidth={2} aria-hidden="true" />
							</Button>
						</PaginationItem>
						{/* Previous page button */}
						<PaginationItem>
							<Button
								size="icon"
								variant="outline"
								className="disabled:pointer-events-none disabled:opacity-50"
								onClick={() => table.previousPage()}
								disabled={!table.getCanPreviousPage()}
								aria-label="Go to previous page"
							>
								<ChevronLeft size={16} strokeWidth={2} aria-hidden="true" />
							</Button>
						</PaginationItem>
						{/* Next page button */}
						<PaginationItem>
							<Button
								size="icon"
								variant="outline"
								className="disabled:pointer-events-none disabled:opacity-50"
								onClick={() => table.nextPage()}
								disabled={!table.getCanNextPage()}
								aria-label="Go to next page"
							>
								<ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
							</Button>
						</PaginationItem>
						{/* Last page button */}
						<PaginationItem>
							<Button
								size="icon"
								variant="outline"
								className="disabled:pointer-events-none disabled:opacity-50"
								onClick={() => table.lastPage()}
								disabled={!table.getCanNextPage()}
								aria-label="Go to last page"
							>
								<ChevronLast size={16} strokeWidth={2} aria-hidden="true" />
							</Button>
						</PaginationItem>
					</PaginationContent>
				</ShadcnPagination>
			</div>
		</div>
	);
}

import {
	getCoreRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import type {
	ColumnFiltersState,
	PaginationState,
	SortingState,
	Table,
	VisibilityState,
} from "@tanstack/react-table";
import { useId, useState } from "react";

import { createContext, useContext } from "react";

import { columns } from "./columns";
import type { Item } from "./types";

export interface TableContextValue {
	id: string;
	data: Item[];
	setData: React.Dispatch<React.SetStateAction<Item[]>>;
	table: Table<Item>;
}

export const TableContext = createContext<TableContextValue | null>(null);

export function TableProvider({ children }: { children: React.ReactNode }) {
	const id = useId();
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 10,
	});
	const [sorting, setSorting] = useState<SortingState>([
		{
			id: "name",
			desc: false,
		},
	]);
	const [data, setData] = useState<Item[]>([]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		onSortingChange: setSorting,
		enableSortingRemoval: false,
		getPaginationRowModel: getPaginationRowModel(),
		onPaginationChange: setPagination,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		getFilteredRowModel: getFilteredRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		state: {
			sorting,
			pagination,
			columnFilters,
			columnVisibility,
		},
	});

	return (
		<TableContext.Provider
			value={{
				id,
				data,
				setData,
				table,
			}}
		>
			{children}
		</TableContext.Provider>
	);
}

export function useTable() {
	const value = useContext(TableContext);

	if (value === null) {
		throw new Error("You must use 'useTable' inside a 'TableProvider'");
	}

	return value;
}

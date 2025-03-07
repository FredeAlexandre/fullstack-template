import { Filters } from "./components/filters";
import { Pagination } from "./components/pagination";
import { Table } from "./components/table";
import { TableProvider, useTable } from "./context";

export default function Home() {
	return (
		<div className="flex h-dvh items-center justify-center">
			<TableProvider>
				<TableConsumer />
			</TableProvider>
		</div>
	);
}

function TableConsumer() {
	const { setData } = useTable();

	return (
		<div className="max-w-[1000px] space-y-4">
			<Filters />
			<Table />
			<Pagination />
		</div>
	);
}

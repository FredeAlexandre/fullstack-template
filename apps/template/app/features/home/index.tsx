import { useEffect } from "react";

import { Filters } from "./components/filters";
import { Pagination } from "./components/pagination";
import { Table } from "./components/table";
import { TableProvider, useTable } from "./context";

export default function Home() {
	return (
		<TableProvider>
			<TableConsumer />
		</TableProvider>
	);
}

function TableConsumer() {
	const { setData } = useTable();

	useEffect(() => {
		async function fetchPosts() {
			const res = await fetch(
				"https://res.cloudinary.com/dlzlfasou/raw/upload/users-01_fertyx.json",
			);
			const data = await res.json();
			setData(data);
		}
		fetchPosts();
	}, [setData]);

	return (
		<div className="max-w-[1000px] space-y-4">
			<Filters />
			<Table />
			<Pagination />
		</div>
	);
}

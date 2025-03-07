export type Friend = {
	username: string;
	avatar: string | null;
};

export type Item = {
	id: string;
	username: string;
	avatar: string | null;
	email: string;
	age: string;
	flag: string;
	status: "active" | "inactive" | "pending";
	balance: number;
	createdAt: Date;
	bio: string;
	role: "admin" | "user";
	posts_amount: number;
	friends: Friend[];
};

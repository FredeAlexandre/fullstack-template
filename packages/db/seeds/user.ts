import { faker } from "@faker-js/faker";
import { db } from "../src/client";
import { friends, posts, users } from "../src/schema";

type User = typeof users.$inferSelect;

function createFakeUser(): User {
	return {
		id: faker.string.uuid(),
		username: faker.internet.username(),
		email: faker.internet.email(),
		age: faker.number.int({ min: 18, max: 80 }),
		isActive: faker.helpers.arrayElement([true, false]),
		createdAt: faker.date.past(),
		bio: faker.person.bio(),
		role: faker.helpers.arrayElement(["user", "admin"]),
	};
}

type Post = typeof posts.$inferSelect;

let post_id = 0;

function createFakePostFor(userId: string): Post {
	return {
		id: post_id++,
		userId: userId,
		title: faker.lorem.sentence(),
		content: faker.lorem.paragraph(),
		createdAt: faker.date.past(),
	};
}

type Friend = typeof friends.$inferSelect;

let friend_id = 0;

function createFakeFriendFor(userId: string, friendId: string): Friend {
	return {
		id: friend_id++,
		userId: userId,
		friendId: friendId,
		createdAt: faker.date.past(),
	};
}

function createFakeUsers(count: number) {
	const users = [];
	for (let i = 0; i < count; i++) {
		users.push(createFakeUser());
	}
	return users;
}

function createFakePosts(users: User[], total_amount_posts: number) {
	const posts = [];
	for (const user of users) {
		const amount_posts = faker.number.int({
			min: 0,
			max: total_amount_posts > 10 ? 10 : total_amount_posts,
		});
		for (let i = 0; i < amount_posts; i++) {
			posts.push(createFakePostFor(user.id));
		}
	}
	return posts;
}

function getRandomUser(users: User[]) {
	const user = users[faker.number.int({ min: 0, max: users.length - 1 })];

	if (user === undefined) {
		throw new Error("user is undefined by some weird magic")
	}

	return user
}

function createFakeFriends(users: User[], total_amount_friends: number) {
	const _friends = [];
	for (const user of users) {
		const amount_friends = faker.number.int({
			min: 0,
			max: total_amount_friends > 5 ? 5 : total_amount_friends,
		});
		for (let i = 0; i < amount_friends; i++) {
			let friend = getRandomUser(users)

			while (friend.id === user.id) {
				friend = getRandomUser(users)
			}

			_friends.push(createFakeFriendFor(user.id, friend.id));
		}
	}

	return _friends;
}

async function main() {
	const fake_users = createFakeUsers(50);
	await db.insert(users).values(fake_users);

	const fake_posts = createFakePosts(fake_users, 100);
	await db.insert(posts).values(fake_posts);

	const fake_friends = createFakeFriends(fake_users, 5);
	await db.insert(friends).values(fake_friends);
}

main()
	.then(() => {
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
	});

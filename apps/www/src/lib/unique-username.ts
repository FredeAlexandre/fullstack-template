function getRandomRickAndMortyCharacter(): string {
	const characters = [
		"RickSanchez",
		"MortySmith",
		"SummerSmith",
		"BethSmith",
		"JerrySmith",
		"Birdperson",
		"MrMeeseeks",
		"Squanchy",
		"TammyGuetermann",
		"EvilMorty",
		"NoobNoob",
		"PickleRick",
		"KrombopulosMichael",
		"AbradolfLincler",
		"Gazorpazorpfield",
		"MrPoopybutthole",
		"Unity",
		"ScaryTerry",
		"Snuffles",
		"Jaguar",
		"Jessica",
		"AntsInMyEyesJohnson",
		"Gearhead",
		"ZeepXanflorp",
	];

	return characters[Math.floor(Math.random() * characters.length)];
}

function generateRandomSuffix(length = 8): string {
	const chars =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_.";
	let result = "";
	for (let i = 0; i < length; i++) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return result;
}

export function uniqueUsername(): string {
	const baseName = getRandomRickAndMortyCharacter();
	const suffix = generateRandomSuffix();
	return `${baseName}.${suffix}`;
}

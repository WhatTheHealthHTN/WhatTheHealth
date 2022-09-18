export enum Tag {
	blood = 'blood',
	environment = 'environment',
	exercise = 'exercise',
	nutrition = 'nutrition',
	sleep = 'sleep'
}

export function getTagColors(tag: Tag) {
	switch (tag) {
		case Tag.blood:
			return ['#ff0000aa', '#ff0000'];
		case Tag.environment:
			return ['#252525aa', '#252525'];
		case Tag.exercise:
			return ['#00008Baa', '#00008B'];
		case Tag.nutrition:
			return ['#006400aa', '#006400'];
		case Tag.sleep:
			return ['#6a0dadaa', '#6a0dad'];
		default:
			throw new Error(`Tag ${tag} not found.`)
	}
}


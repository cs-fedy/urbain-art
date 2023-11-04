export default function rotate<T>(
	items: Array<T>,
	direction: 1 | -1 | 0,
): Array<T> {
	if (items.length === 0) return []

	if (direction === 1)
		return [items[items.length - 1], ...items.slice(0, items.length - 1)]

	if (direction === -1) {
		const [first, ...rest] = items
		return [...rest, first]
	}

	return items
}

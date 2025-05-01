// Last updated: 5/1/2025, 7:39:26 PM
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { id: number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    const map = new Map<number, ArrayType>();

    // Add all from arr1
    for (const item of arr1) {
        map.set(item.id, { ...item });
    }

    // Merge or insert from arr2
    for (const item of arr2) {
        const existing = map.get(item.id);
        if (existing) {
            // Merge with arr2 overriding
            map.set(item.id, { ...existing, ...item });
        } else {
            map.set(item.id, { ...item });
        }
    }

    // Return sorted result by id and sort keys alphabetically within each object
    return Array.from(map.values())
        .sort((a, b) => a.id - b.id)
}

export const dateToArrayString = (date: Date ): string[] => {
    const [h1, h2] = date.getHours().toString().padStart(2, "0").split('');
	const [m1, m2] = date.getMinutes().toString().padStart(2, "0").split('');
    const [s1, s2] = date.getSeconds().toString().padStart(2, "0").split('');
    const time = [h1, h2, m1, m2, s1, s2];
    return time
}

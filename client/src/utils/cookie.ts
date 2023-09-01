export function setCookie(name: string, value: string, days: number = 30) {
	const expirationDate = new Date()
	expirationDate.setDate(expirationDate.getDate() + days)
	const cookieValue =
		encodeURIComponent(value) +
		(days ? `; expires=${expirationDate.toUTCString()}` : '')
	document.cookie = `${name}=${cookieValue}; path=/`
}

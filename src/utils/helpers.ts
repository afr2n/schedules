export const generateSlug = (str: string) => {
	return str
		.toLowerCase() // Convert the string to lowercase
		.replace(/\s+/g, "-") // Replace spaces with hyphens
		.replace(/[^\w\-]+/g, "") // Remove special characters
		.replace(/\-\-+/g, "-") // Replace multiple hyphens with a single hyphen
		.replace(/^-+/, "") // Trim hyphens from the start of the string
		.replace(/-+$/, ""); // Trim hyphens from the end of the string
};

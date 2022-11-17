export const chooseType = (templateNamee) => {
	return {
		type: "string",
		name: "name",
		message: "Choose a name for your project:",
		default: templateNamee
	};
};

export const runInstall = {
	type: "confirm",
	name: "runInstall",
	message: "",
	default: true
};

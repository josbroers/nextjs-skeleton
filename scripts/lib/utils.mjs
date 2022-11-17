import chalk from "chalk";
import { existsSync, rm } from "fs";
import { dirAlreadyExists, installGit, installNode, installNpm } from "./messages.mjs";
import { execSync } from "child_process";

export const renderMessage = (message, type, exit, suffix) => {
	switch (type) {
		case "success":
			console.log(`%s: ${message}`, chalk.green.bold(suffix ?? type.toUpperCase()));
			break;
		case "error":
			console.error(`%s: ${message}`, chalk.red.bold(suffix ?? type.toUpperCase()));
			break;
		case "warning":
			console.warn(`%s: ${message}`, chalk.yellow.bold(suffix ?? type.toUpperCase()));
			break;
		case "info":
			console.log(`%s: ${message}`, chalk.cyan.bold(suffix ?? type.toUpperCase()));
			break;
		default:
			console.log(message);
	}

	if (exit) {
		process.exit(1);
	}
};

export const checkForExistingPath = async (path) => {
	if (existsSync(path)) renderMessage(dirAlreadyExists(path), "error", true);
};

export const checkForGit = async () => {
	try {
		await execSync("git --version", { stdio: "pipe" });
	} catch (e) {
		renderMessage(installGit, "error", true);
	}
};

export const checkNodeVersion = async () => {
	if (
		!await execSync("node -v", { stdio: "pipe" })
			.toString()
			.match(/v16\.[1-9][5-9]\.\d*/g)
	) {
		renderMessage(installNode, "error", true);
	}
};

export const checkNpmVersion = async () => {
	if (
		!await execSync("npm -v", { stdio: "pipe" })
			.toString()
			.match(/8\.[5-9]\.\d*/g)
	) {
		renderMessage(installNpm, "error", true);
	}
};

export const installDeps = async () => {
	await execSync("npm i", { stdio: "pipe" });
};


export const removePaths = async (paths) => {
	paths.forEach((path) => {
		rm(path, { force: true, recursive: true }, error => {
			if (error) throw new Error(`Can't remove ${path}`);
		});
	});
};

export const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

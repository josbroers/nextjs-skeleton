#!/usr/bin/env node

import arg from "arg";
import inquirer from "inquirer";
import {createProject} from "./main.mjs";
import chalk from "chalk";

let templateName = "nextjs-skeleton";

/**
 * Pass arguments into CLI options.
 * @param {*} rawArgs
 * @returns
 */
function parseArgumentsIntoOptions(rawArgs) {
	const args = arg(
		{
			"--install": Boolean,
			"-i": "--install",
		},
		{
			argv: rawArgs.slice(2),
		}
	);

	return {
		name: args._[0],
		runInstall: args["--install"] || false,
	};
}

/**
 * Show prompt for missing options.
 * @param {*} options
 * @returns
 */
async function promptForMissingOptions(options) {
	const questions = [];

	// Specify a project-name.
	if (!options.name) {
		questions.push({
			type: "string",
			name: "name",
			message: "Please choose a name for your project",
			default: templateName,
		});
	}

	// Ask to install dependencies with Yarn.
	if (!options.runInstall) {
		questions.push({
			type: "confirm",
			name: "runInstall",
			message: "Install dependencies with Yarn?",
			default: true,
		});
	}

	// Add answers to prompt.
	const answers = await inquirer.prompt(questions);

	templateName = options.name || answers.name;

	return {
		...options,
		name: options.name || answers.name,
		runInstall: options.runInstall || answers.runInstall,
	};
}

/**
 * Execute script.
 * @param {*} args
 */
async function cli(args) {
	let options = parseArgumentsIntoOptions(args);
	options = await promptForMissingOptions(options);
	await createProject(options);
}

await cli(process.argv).then(() => {
	console.log("%s Project ready", chalk.green.bold("DONE"));
	console.log(`%s Use ${chalk.cyan(`cd ${templateName}`)} to open your new Next.js project`, chalk.magenta.bold("INFO"));
	console.log(`%s Use ${chalk.cyan("git init && git add . && git commit -m \"Initial commit\"")} to initialize a git repository`, chalk.magenta.bold("INFO"));
	console.log("You can use the following commands to develop, test and build:");
	console.log(`- ${chalk.cyan("yarn dev")} ${chalk.dim("# Start a local dev server for all projects")}`);
	console.log(`- ${chalk.cyan("yarn dev --scope=<app>")} ${chalk.dim("# Start a local dev server for a specific project")}`);
	console.log(`- ${chalk.cyan("yarn lint")} ${chalk.dim("# Test code using ESLint")}`);
	console.log(`- ${chalk.cyan("yarn build lint --scope=<app>")} ${chalk.dim("# Build the application for production")}`);
	console.log(`- ${chalk.cyan("yarn clean")} ${chalk.dim("# Remove `node_modules` and `yarn.lock`")}`);
	console.log(`- ${chalk.cyan("yarn upgrade_all")} ${chalk.dim("# Upgrade all packages in the project to the latest version")}`);
}).catch(() => {
	console.log("%s Something went wrong", chalk.red.bold("ERROR"));
});

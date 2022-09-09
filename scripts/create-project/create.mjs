#!/usr/bin/env node

import arg from "arg";
import inquirer from "inquirer";
import { createProject } from "./main.mjs";

let templateName = "nextjs-skeleton";

/**
 * Pass arguments into CLI options.
 * @param {*} rawArgs
 * @returns
 */
async function parseArgumentsIntoOptions(rawArgs) {
	const args = await arg(
		{
			"--install": Boolean,
			"-i": "--install"
		},
		{
			argv: rawArgs.slice(2)
		}
	);

	return {
		name: args._[0],
		runInstall: args["--install"] || false
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
			default: templateName
		});
	}

	// Ask to install dependencies with Yarn.
	if (!options.runInstall) {
		questions.push({
			type: "confirm",
			name: "runInstall",
			message: "Install dependencies with Yarn?",
			default: true
		});
	}

	// Add answers to prompt.
	const answers = await inquirer.prompt(questions);

	templateName = options.name || answers.name;

	return {
		...options,
		name: options.name || answers.name,
		runInstall: options.runInstall || answers.runInstall
	};
}

/**
 * Execute script.
 * @param {*} args
 */
async function cli(args) {
	let options = await parseArgumentsIntoOptions(args);
	options = await promptForMissingOptions(options);
	await createProject(options);
}

await cli(process.argv);

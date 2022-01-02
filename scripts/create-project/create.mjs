#!/usr/bin/env node

import arg from 'arg';
import inquirer from 'inquirer';
import {createProject} from "./main.mjs";

function parseArgumentsIntoOptions(rawArgs) {
	const args = arg(
			{
				'--git': Boolean,
				'--install': Boolean,
				'-g': '--git',
				'-i': '--install',
			},
			{
				argv: rawArgs.slice(2),
			}
	);

	return {
		name: args._[0],
		git: args['--git'] || false,
		runInstall: args['--install'] || false,
	};
}

async function promptForMissingOptions(options) {
	const defaultTemplate = 'nextjs-skeleton',
			questions = [];

	if (!options.name) {
		questions.push({
			type: 'string',
			name: 'name',
			message: 'Please choose a name for your project',
			default: defaultTemplate,
		});
	}

	if (!options.git) {
		questions.push({
			type: 'confirm',
			name: 'git',
			message: 'Initialize a git repository?',
			default: true,
		});
	}

	if (!options.runInstall) {
		questions.push({
			type: 'confirm',
			name: 'runInstall',
			message: 'Install dependencies with Yarn?',
			default: true,
		});
	}

	const answers = await inquirer.prompt(questions);

	return {
		...options,
		name: options.name || answers.name,
		git: options.git || answers.git,
		runInstall: options.runInstall || answers.runInstall,
	};
}

async function cli(args) {
	let options = parseArgumentsIntoOptions(args);
	options = await promptForMissingOptions(options);
	await createProject(options);
}

cli(process.argv)
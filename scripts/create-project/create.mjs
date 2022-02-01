#!/usr/bin/env node

import arg from 'arg'
import inquirer from 'inquirer'
import { createProject } from './main.mjs'

/**
 * Pass arguments into CLI options
 *
 * @param {*} rawArgs
 * @returns
 */
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
	)

	return {
		name: args._[0],
		git: args['--git'] || false,
		runInstall: args['--install'] || false,
	}
}

/**
 * Show prompt for missing options
 *
 * @param {*} options
 * @returns
 */
async function promptForMissingOptions(options) {
	const defaultTemplate = 'nextjs-skeleton',
		questions = []

	// Specify a projectname
	if (!options.name) {
		questions.push({
			type: 'string',
			name: 'name',
			message: 'Please choose a name for your project',
			default: defaultTemplate,
		})
	}

	// Ask to initialize a git repository
	if (!options.git) {
		questions.push({
			type: 'confirm',
			name: 'git',
			message: 'Initialize a git repository?',
			default: true,
		})
	}

	// Ask to install dependencies with Yarn
	if (!options.runInstall) {
		questions.push({
			type: 'confirm',
			name: 'runInstall',
			message: 'Install dependencies with Yarn?',
			default: true,
		})
	}

	// Add answers to prompt
	const answers = await inquirer.prompt(questions)

	return {
		...options,
		name: options.name || answers.name,
		git: options.git || answers.git,
		runInstall: options.runInstall || answers.runInstall,
	}
}

/**
 * Execute script
 *
 * @param {*} args
 */
async function cli(args) {
	let options = parseArgumentsIntoOptions(args)
	options = await promptForMissingOptions(options)
	await createProject(options)
}

cli(process.argv)

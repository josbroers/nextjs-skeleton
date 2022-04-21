#!/usr/bin/env node

import chalk from 'chalk'
import fs from 'fs'
import { execSync } from 'child_process'
import glob from 'glob'

/**
 * Execute script
 */
async function cli() {
	// Skip when the file `yarn.lock` doesn't exists
	if (!fs.existsSync('yarn.lock')) {
		console.log()
		console.error("%s Can't execute script", chalk.red.bold('ERROR'))
		console.log()
		process.exit(1)
	}

	// Run command: `turbo run clean`
	try {
		execSync('turbo run clean', { stdio: 'pipe' })
	} catch (error) {
		console.log()
		console.error(`%s Can't execute turbo run clean`, chalk.red.bold('ERROR'))
		console.log()
		process.exit(1)
	}

	// Remove file `yarn.lock`
	try {
		fs.rm('./yarn.lock', { force: true, recursive: true }, error => {
			if (error) throw new Error(`Failed to remove yarn.lock`)
		})
	} catch (error) {
		console.log()
		console.error(`%s ${error}`, chalk.red.bold('ERROR'))
		console.log()
		process.exit(1)
	}

	// Remove all `node_modules` directories
	try {
		glob('**/*node_modules/', (error, result) => {
			if (error) throw new Error("Can't locate node_modules")
			result.forEach(folder => {
				fs.rm(folder, { force: true, recursive: true }, error => {
					if (error) throw new Error(`Failed to remove ${folder}`)
				})
			})
		})
	} catch (error) {
		console.log()
		console.error(`%s ${error}`, chalk.red.bold('ERROR'))
		console.log()
		process.exit(1)
	}

	// Remove all `.turbo` directories
	try {
		glob('**/*.turbo/', (error, result) => {
			if (error) throw new Error("Can't locate .turbo")
			result.forEach(folder => {
				fs.rm(folder, { force: true, recursive: true }, error => {
					if (error) throw new Error(`Failed to remove ${folder}`)
				})
			})
		})
	} catch (error) {
		console.log()
		console.error(`%s ${error}`, chalk.red.bold('ERROR'))
		console.log()
		process.exit(1)
	}

	// Remove all `.next` directories
	try {
		glob('**/*.next/', (error, result) => {
			if (error) throw new Error("Can't locate .next")
			result.forEach(folder => {
				fs.rm(folder, { force: true, recursive: true }, error => {
					if (error) throw new Error(`Failed to remove ${folder}`)
				})
			})
		})
	} catch (error) {
		console.log()
		console.error(`%s ${error}`, chalk.red.bold('ERROR'))
		console.log()
		process.exit(1)
	}

	// Show log when finished
	console.log()
	console.log('%s Removed files and folders', chalk.green.bold('DONE'))
	console.log()
}

await cli()

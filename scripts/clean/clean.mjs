#!/usr/bin/env node

import chalk from 'chalk'
import fs from 'fs'
import { execSync } from 'child_process'
import glob from 'glob'

async function cli() {
	if (!fs.existsSync('yarn.lock')) {
		console.error("%s Can't execute script", chalk.red.bold('ERROR'))
		process.exit(1)
	}

	try {
		execSync('turbo run clean', { stdio: 'pipe' })
	} catch (error) {
		console.error(`%s Can't execute turbo run clean`, chalk.red.bold('ERROR'))
		process.exit(1)
	}

	try {
		fs.rm('./yarn.lock', { force: true, recursive: true }, error => {
			if (error) throw new Error(`Failed to remove yarn.lock`)
		})
	} catch (error) {
		console.error(`%s ${error}`, chalk.red.bold('ERROR'))
		process.exit(1)
	}

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
		console.error(`%s ${error}`, chalk.red.bold('ERROR'))
		process.exit(1)
	}

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
		console.error(`%s ${error}`, chalk.red.bold('ERROR'))
		process.exit(1)
	}

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
		console.error(`%s ${error}`, chalk.red.bold('ERROR'))
		process.exit(1)
	}

	console.log('%s Removed files and folders', chalk.green.bold('DONE'))
}

await cli()

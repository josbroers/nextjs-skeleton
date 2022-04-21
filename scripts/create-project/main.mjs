import chalk from 'chalk'
import fs from 'fs'
import {execSync} from 'child_process'
import Listr from 'listr'
import editJsonFile from 'edit-json-file'

/**
 * Download the files from git
 *
 * @param {*} options
 */
async function downloadFiles(options) {
	try {
		execSync(`git clone https://github.com/SirRedDAB/nextjs-skeleton.git ${options.name}`, {
			stdio: 'pipe',
		})
		process.chdir(options.name)
	} catch (error) {
		console.log()
		console.error('%s Failed to download the files', chalk.red.bold('ERROR'))
		console.log()
		process.exit(1)
	}
}

/**
 * Configure the project
 *
 * @param {*} options
 * @param {*} resolve
 * @param {*} reject
 */
async function configure(options, resolve, reject) {
	const remove = ['lerna.json', 'LICENSE', '.github', '.git', 'patches']

	try {
		// Remove files and directories
		remove.forEach(object => {
			fs.rm(object, {force: true, recursive: true}, error => {
				if (error) throw new Error(`Can't remove ${object}`)
			})
		})

		// Remove `yarn.lock` if chosen not to install dependencies
		if (!options.runInstall) {
			fs.rm('yarn.lock', {force: true, recursive: true}, error => {
				if (error) throw new Error(`Can't remove yarn.lock`)
			})
		}

		// Remove all scripts except clean
		fs.readdir('scripts', (error, files) => {
			if (error) throw new Error(`Can't remove scripts`)

			files.forEach(file => {
				if (file !== 'clean') {
					fs.rm(`scripts/${file}`, {force: true, recursive: true}, error => {
						if (error) throw new Error(`Can't remove ${file}`)
					})
				}
			})
		})

		// Change the main `package.json`
		const file = editJsonFile('package.json')
		file.set('name', options.name)
		file.set('private', true)
		file.unset('description')
		file.unset('bin')
		file.unset('homepage')
		file.unset('main')
		file.unset('bugs')
		file.unset('keywords')
		file.unset('repository')
		file.unset('publishConfig')
		file.unset('scripts.make_public')
		file.unset('scripts.copy_readme')
		file.unset('scripts.lerna')
		file.pop('workspaces')
		file.unset('devDependencies.json')
		file.unset('devDependencies.lerna')
		file.unset('devDependencies.copy')
		file.unset('volta')
		file.save()
		resolve(true)
	} catch (error) {
		reject(error)
	}
}

/**
 * Create a new directory using the project-name
 *
 * @param {*} options
 * @returns
 */
export async function createProject(options) {
	// Exit when directory already exists
	if (fs.existsSync(options.name)) {
		console.log()
		console.error('%s Directory already exists', chalk.red.bold('ERROR'))
		console.log()
		process.exit(1)
	}

	// Exit when git is not installed
	try {
		execSync('git --version', {stdio: 'pipe'})
	} catch (error) {
		console.log()
		console.error('%s Please install git', chalk.red.bold('ERROR'))
		console.log()
		process.exit(1)
	}

	if (options.runInstall) {
		// Check if Node.js 14 or higher is installed
		if (
			!execSync('node -v', {stdio: 'pipe'})
				.toString()
				.match(/v14\.\d*\.\d*/g)
		) {
			console.log()
			console.error('%s Please install Node.js 14 or higher', chalk.red.bold('ERROR'))
			console.log()
			process.exit(1)
		}

		// Check if Yarn is installed
		try {
			execSync('yarn -v', {stdio: 'pipe'})
		} catch (error) {
			console.log()
			console.error('%s Please install Yarn to install the dependencies', chalk.red.bold('ERROR'))
			console.log()
			process.exit(1)
		}
	}

	/**
	 * Run tasks in specific order
	 */
	const tasks = new Listr([
		{
			title: 'Downloading files',
			task: () => downloadFiles(options),
		},
		{
			title: 'Configure project',
			task: () =>
				new Promise((resolve, reject) => {
					configure(options, resolve, reject)
				}),
		},
		{
			title: 'Install dependencies',
			task: () => execSync('yarn', {stdio: 'pipe'}),
			skip: () =>
				!options.runInstall ? 'Pass --install to automatically install dependencies' : undefined,
		},
	])

	// Execute tasks and log results
	console.log()
	await tasks.run()
	return true
}

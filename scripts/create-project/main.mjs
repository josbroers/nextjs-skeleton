import chalk from 'chalk'
import fs from 'fs'
import { execSync } from 'child_process'
import Listr from 'listr'
import editJsonFile from 'edit-json-file'

async function downloadFiles(options) {
	try {
		execSync(`git clone https://github.com/SirRedDAB/nextjs-skeleton.git ${options.name}`, {
			stdio: 'pipe',
		})
		process.chdir(options.name)
	} catch (error) {
		console.error('%s Failed to download the files', chalk.red.bold('ERROR'))
		process.exit(1)
	}
}

async function configure(options, resolve, reject) {
	const remove = ['lerna.json', 'LICENSE', '.github', '.git']

	try {
		remove.forEach(object => {
			fs.rm(object, { force: true, recursive: true }, error => {
				if (error) throw new Error(`Can't remove ${object}`)
			})
		})

		if (!options.runInstall) {
			fs.rm('yarn.lock', { force: true, recursive: true }, error => {
				if (error) throw new Error(`Can't remove yarn.lock`)
			})
		}

		fs.readdir('scripts', (error, files) => {
			if (error) throw new Error(`Can't remove scripts`)

			files.forEach(file => {
				if (file !== 'clean') {
					fs.rm(`scripts/${file}`, { force: true, recursive: true }, error => {
						if (error) throw new Error(`Can't remove ${file}`)
					})
				}
			})
		})

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

async function initGit() {
	try {
		execSync('git init && git add . && git commit -m "Initial commit"', { stdio: 'pipe' })
	} catch (error) {
		console.error('%s Failed to initialize git', chalk.red.bold('ERROR'))
		process.exit(1)
	}
}

export async function createProject(options) {
	if (fs.existsSync(options.name)) {
		console.error('%s Directory already exists', chalk.red.bold('ERROR'))
		process.exit(1)
	}

	try {
		execSync('git --version', { stdio: 'pipe' })
	} catch (error) {
		console.error('%s Please install git', chalk.red.bold('ERROR'))
		process.exit(1)
	}

	if (options.runInstall) {
		if (
			!execSync('node -v', { stdio: 'pipe' })
				.toString()
				.match(/v14\.\d*\.\d*/g)
		) {
			console.error('%s Please install Node.js 14 or higher', chalk.red.bold('ERROR'))
			process.exit(1)
		}

		try {
			execSync('yarn -v', { stdio: 'pipe' })
		} catch (error) {
			console.error('%s Please install Yarn to install the dependencies', chalk.red.bold('ERROR'))
			process.exit(1)
		}
	}

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
			task: () => execSync('yarn', { stdio: 'pipe' }),
			skip: () =>
				!options.runInstall ? 'Pass --install to automatically install dependencies' : undefined,
		},
		{
			title: 'Initialize git',
			task: () => initGit(options),
			enabled: () => options.git,
		},
	])

	await tasks.run()
	console.log('%s Project ready', chalk.green.bold('DONE'))
	console.log('You can use the following commands to develop, test and build:')
	console.log()
	console.log(
		`    - ${chalk.cyan('yarn dev')} ${chalk.dim(
			'                     # Start a local dev server for all projects'
		)}`
	)
	console.log(
		`    - ${chalk.cyan('yarn dev --scope=<app>')} ${chalk.dim(
			'       # Start a local dev server for a specific project'
		)}`
	)
	console.log(
		`    - ${chalk.cyan('yarn lint')} ${chalk.dim('                    # Test code using ESLint')}`
	)
	console.log(
		`    - ${chalk.cyan('yarn build lint --scope=<app>')} ${chalk.dim(
			'# Build the application for production'
		)}`
	)
	console.log(
		`    - ${chalk.cyan('yarn clean')} ${chalk.dim(
			'                   # Remove `node_modules` and `yarn.lock`'
		)}`
	)
	console.log(
		`    - ${chalk.cyan('yarn upgrade_all')} ${chalk.dim(
			'             # Upgrade all packages in the project to the latest version'
		)}`
	)
	return true
}

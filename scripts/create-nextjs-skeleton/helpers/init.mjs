import chalk from "chalk";
import runCommand from "./runCommand.mjs";
import {projectName, log, error} from "../create-nextjs-skeleton.mjs"
import {execSync} from "child_process";
import {unlink, rmSync, existsSync} from 'fs';

const removeFiles = [
	".eslintignore",
	"lerna.json",
	"LICENSE",
	"yarn.lock",
	"package.json"
]

const removeFolders = [
	".git",
	".github",
	"scripts"
]

const init = () => {
	// Check if the project name is set
	if (!projectName) {
		log()
		error(`${chalk.red('error')} Please specify the project directory: ${chalk.cyan('npx create-nextjs-skeleton')} ${chalk.green('<projectname>')}`)
		log()
		process.exit(1)
	}

	if (existsSync(projectName)) {
		log()
		error(`${chalk.red('error')} A directory with this project name already exists.`)
		log()
		process.exit(1)
	}

	// Check if git is installed
	try {
		execSync('git --version', {stdio: 'pipe'})
	} catch (e) {
		log()
		error(`${chalk.red('error')} Please install git to continue: https://git-scm.com/`)
		log()
		process.exit(1)
	}

	// Check if the Node version is >= 14.0.0
	if (!execSync('node -v', {stdio: 'pipe'}).toString().match(/v14\.\d*\.\d*/g)) {
		log()
		error(`${chalk.red('error')} Please install a Node version >= ${chalk.green('14.0.0')}`)
		log()
		process.exit(1)
	}

	// Check if Yarn is installed
	try {
		execSync('yarn -v', {stdio: 'pipe'})
	} catch (e) {
		log()
		error(`${chalk.red('error')} Please install yarn to continue: https://yarnpkg.com/`)
		log()
		process.exit(1)
	}

	// Clone repository
	runCommand(`git clone --depth 1 https://github.com/SirRedDAB/nextjs-skeleton ${projectName}`)

	// Remove files
	removeFiles.forEach(file => {
		unlink(`${projectName}/${file}`, (err) => {
			if (err) throw err;
		});
	})

	// Remove folders
	removeFolders.forEach(folder => {
		rmSync(`${projectName}/${folder}`, {recursive: true, force: true});
	})

	// Initialize git repo and add initial commit
	runCommand(`cd ${projectName} && git init && git add . && git commit -m "Initial commit"`)
}

export default init
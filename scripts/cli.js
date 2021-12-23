#!/usr/bin/env node

const { execSync } = require('child_process')
const red = '\x1b[31m'
const white = '\x1b[37m'
const yellow = '\x1b[33m'
const magenta = '\x1b[35m'

const runCommand = command => {
	try {
		execSync(`${command}`, { stdio: 'inherit' })
	} catch (e) {
		console.error(`\n${red}Error: ${white}Failed to execute ${command}\n`, e)
		return false
	}
	return true
}

const repoName = process.argv[2]
if (!repoName) {
	console.error(`\n${red}Error: ${white}Please specify the project directory\n`)
	process.exit(-1)
}

const gitCheckoutCommand = `git clone --depth 1 https://github.com/SirRedDAB/nextjs-skeleton ${repoName}`
const removeFilesCommand = `cd ${repoName} && rm -rf .git .github lerna.json .eslintignore LICENSE scripts`
const installDepsCommand = `cd ${repoName} && yarn`

console.log(`\n${yellow}[1/3] ${white}Creating a new monorepo named ${repoName}\n`)
const checkedOut = runCommand(gitCheckoutCommand)
if (!checkedOut) process.exit(-1)
const removeFiles = runCommand(removeFilesCommand)
if (!removeFiles) process.exit(-1)

console.log(`\n${yellow}[2/3] ${white}Installing packages. This might take a couple of minutes...\n`)
const installedDeps = runCommand(installDepsCommand)
if (!installedDeps) process.exit(-1)

console.log(`\n${yellow}[3/3] ${white}Congratulations! You are ready. You can use the following commands to develop, test and build:${magenta}\n`)
console.log(`  - yarn dev`)
console.log(`  - yarn build`)
console.log(`  - yarn lint\n`)

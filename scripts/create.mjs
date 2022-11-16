#!/usr/bin/env node

import arg from "arg";
import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs";
import { execSync } from "child_process";
import Listr from "listr";
import editJsonFile from "edit-json-file";

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
 * Download the files from git.
 * @param {*} options
 */
async function downloadFiles(options) {
	try {
		await execSync(`git clone https://github.com/jos-broers/nextjs-skeleton.git ${options.name}`, {
			stdio: "pipe"
		});
		process.chdir(options.name);
	} catch (error) {
		console.error("%s Failed to download the files", chalk.red.bold("ERROR"));
		process.exit(1);
	}
}

/**
 * Configure the project.
 * @param {*} options
 * @param {*} resolve
 * @param {*} reject
 */
async function configure(options, resolve, reject) {
	const remove = ["lerna.json", "LICENSE", ".github", ".git", "patches"];

	try {
		// Remove files and directories.
		remove.forEach(object => {
			fs.rm(object, { force: true, recursive: true }, error => {
				if (error) throw new Error(`Can't remove ${object}`);
			});
		});

		// Remove `yarn.lock` if chosen not to install dependencies.
		if (!options.runInstall) {
			fs.rm("yarn.lock", { force: true, recursive: true }, error => {
				if (error) throw new Error(`Can't remove yarn.lock`);
			});
		}

		// Remove all scripts except clean.
		fs.readdir("scripts", (error, files) => {
			if (error) throw new Error(`Can't remove scripts`);

			files.forEach(file => {
				if (file !== "clean") {
					fs.rm(`scripts/${file}`, { force: true, recursive: true }, error => {
						if (error) throw new Error(`Can't remove ${file}`);
					});
				}
			});
		});

		// Change the main `package.json`.
		const file = await editJsonFile("package.json");
		file.set("name", options.name);
		file.set("private", true);
		file.unset("description");
		file.unset("bin");
		file.unset("homepage");
		file.unset("main");
		file.unset("bugs");
		file.unset("keywords");
		file.unset("repository");
		file.unset("publishConfig");
		file.unset("scripts.make_public");
		file.unset("scripts.copy_readme");
		file.unset("scripts.lerna");
		file.pop("workspaces");
		file.unset("devDependencies.json");
		file.unset("devDependencies.lerna");
		file.unset("devDependencies.copy");
		file.unset("volta");
		file.save();
		resolve(true);
	} catch (error) {
		reject(error);
	}
}

/**
 * Create a new directory using the project-name.
 * @param {*} options
 * @returns
 */
export async function createProject(options) {
	// Exit when directory already exists.
	if (fs.existsSync(options.name)) {
		console.error("%s Directory already exists", chalk.red.bold("ERROR"));
		process.exit(1);
	}

	// Exit when git is not installed.
	try {
		await execSync("git --version", { stdio: "pipe" });
	} catch (error) {
		console.error("%s Please install git", chalk.red.bold("ERROR"));
		process.exit(1);
	}

	if (options.runInstall) {
		// Check if Node.js 14 or higher is installed.
		if (!await execSync("node -v", { stdio: "pipe" })
			.toString()
			.match(/v14\.\d*\.\d*/g)) {
			console.error("%s Please install Node.js 14 or higher", chalk.red.bold("ERROR"));
			process.exit(1);
		}

		// Check if Yarn is installed.
		try {
			await execSync("yarn -v", { stdio: "pipe" });
		} catch (error) {
			console.error("%s Please install Yarn to install the dependencies", chalk.red.bold("ERROR"));
			process.exit(1);
		}
	}

	/**
	 * Run tasks in specific order.
	 *
	 * @type {Listr}
	 */
	const tasks = await new Listr([{
		title: "Downloading files", task: () => downloadFiles(options)
	}, {
		title: "Configure project", task: () => new Promise((resolve, reject) => {
			configure(options, resolve, reject);
		})
	}, {
		title: "Install dependencies",
		task: () => execSync("yarn", { stdio: "pipe" }),
		skip: () => !options.runInstall ? "Pass --install to automatically install dependencies" : undefined
	}]);

	// Execute tasks and log results.
	tasks.run().then(() => {
		console.log("%s Project ready", chalk.green.bold("DONE"));
		console.log(`%s Use ${chalk.cyan(`cd ${options.templateName}`)} to open your new Next.js project`, chalk.magenta.bold("INFO"));
		console.log(`%s Use ${chalk.cyan("git init && git add . && git commit -m \"Initial commit\"")} to initialize a git repository`, chalk.magenta.bold("INFO"));
		console.log("You can use the following commands to develop, test and build:");
		console.log(`- ${chalk.cyan("yarn dev")} ${chalk.dim("# Start a local dev server for all projects")}`);
		console.log(`- ${chalk.cyan("yarn dev --scope=<app>")} ${chalk.dim("# Start a local dev server for a specific project")}`);
		console.log(`- ${chalk.cyan("yarn build lint --scope=<app>")} ${chalk.dim("# Build the application for production")}`);
	});
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

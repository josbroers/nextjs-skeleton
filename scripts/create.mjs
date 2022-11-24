#!/usr/bin/env node

import {
	checkForExistingPath,
	checkForGit,
	checkNodeVersion,
	installDeps,
	removePaths,
	renderMessage,
	wait
} from "./lib/utils.mjs";
import arg from "arg";
import { chooseType, runInstall } from "./lib/questions.mjs";
import inquirer from "inquirer";
import { execSync } from "child_process";
import {
	autoRunInstall,
	configuringYourProject,
	downloadProjectFiles,
	failedToDownload,
	gitInit,
	installDependencies,
	openYourProject,
	projectReady,
	runBuild,
	runDeploy,
	runDev,
	runLint,
	runstart,
	scriptCommands
} from "./lib/messages.mjs";
import editJsonFile from "edit-json-file";
import { readPackageUp } from "read-pkg-up";

let templateName = "nextjs-skeleton";
let install = false;

const prepareScript = async () => {
	const args = await arg(
		{
			"--install": Boolean,
			"-i": "--install"
		},
		{
			argv: process.argv.slice(2)
		}
	);

	const questions = [];
	if (!args._[0]) questions.push(chooseType(templateName));
	if (!args["--install"]) questions.push(runInstall);

	const answers = await inquirer.prompt(questions);

	templateName = args._[0] || answers.name;
	install = args["--install"] || answers.runInstall;
};

const downloadFiles = async () => {
	const { packageJson } = await readPackageUp();

	try {
		await execSync(`git clone ${packageJson.repository.url.replace("git+", "")} ${templateName}`, { stdio: "pipe" });
		process.chdir(templateName);
	} catch (error) {
		renderMessage(failedToDownload, "error", true);
	}
};

const configureApp = async () => {
	try {
		await removePaths([
			".github",
			".npmignore",
			"lerna.json",
			"LICENSE",
			"package-lock.json",
			"scripts"
		]);

		await editJsonFile("package.json")
			.set("name", templateName)
			.set("private", true)
			.unset("main")
			.unset("type")
			.unset("description")
			.unset("homepage")
			.unset("bugs")
			.unset("keywords")
			.unset("repository")
			.unset("publishConfig")
			.unset("bin")
			.unset("scripts.make_public")
			.unset("scripts.copy_readme")
			.unset("scripts.lerna")
			.unset("devDependencies.arg")
			.unset("devDependencies.copy")
			.unset("devDependencies.edit-json-file")
			.unset("devDependencies.inquirer")
			.unset("devDependencies.json")
			.unset("devDependencies.lerna")
			.unset("devDependencies.listr")
			.unset("devDependencies.read-pkg-up")
			.save();
	} catch ({ message }) {
		renderMessage(message, "error", true);
	}
};

const create = async () => {
	await prepareScript();
	await checkForExistingPath(templateName);
	await checkForGit();

	if (install) {
		await checkNodeVersion();
	}
};

create()
	.then(async () => {
		renderMessage(downloadProjectFiles, "info");
		await downloadFiles();
		await wait(1000);
	})
	.then(async () => {
		renderMessage(configuringYourProject, "info");
		await configureApp();
		await wait(1000);
	})
	.then(async () => {
		if (install) {
			renderMessage(installDependencies, "info");
			await installDeps();
			await wait(1000);
		} else {
			renderMessage(autoRunInstall, "warning");
		}
	})
	.then(() => {
		renderMessage(projectReady, "success");
		renderMessage(openYourProject(templateName), "info");
		renderMessage(gitInit, "info");
		renderMessage(scriptCommands);
		renderMessage(runDev);
		renderMessage(runLint);
		renderMessage(runBuild);
		renderMessage(runDeploy);
		renderMessage(runstart);
	})
	.catch(async ({ message }) => {
		renderMessage(message, "error", true);
		await removePaths([templateName]);
	});

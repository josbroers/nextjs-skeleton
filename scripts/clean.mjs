#!/usr/bin/env node

import chalk from "chalk";
import fs from "fs";
import { execSync } from "child_process";
import glob from "glob";

/**
 * Execute script
 * @returns {Promise<void>}
 */
async function cli() {
	/** Skip when the file `package-lock.json` doesn't exist */
	if (!fs.existsSync("package-lock.json")) {
		console.error("%s Can't execute script'", chalk.red.bold("ERROR"));
		process.exit(1);
	}

	/** Run command: `turbo run clean` */
	try {
		execSync("npm run clean", { stdio: "pipe" });
	} catch (error) {
		console.error("%s Can't execute npm run clean", chalk.red.bold("ERROR"));
		process.exit(1);
	}

	/** Remove file `package-lock.json` */
	try {
		fs.rm("./package-lock.json", { force: true, recursive: true }, error => {
			if (error) throw new Error(`Failed to remove package-lock.json`);
		});
	} catch (error) {
		console.error(`%s ${error}`, chalk.red.bold("ERROR"));
		process.exit(1);
	}

	/** Remove all `node_modules` directories */
	try {
		glob("**/*node_modules/", (error, result) => {
			if (error) throw new Error("Can't locate node_modules");
			result.forEach(folder => {
				fs.rm(folder, { force: true, recursive: true }, error => {
					if (error) throw new Error(`Failed to remove ${folder}`);
				});
			});
		});
	} catch (error) {
		console.error(`%s ${error}`, chalk.red.bold("ERROR"));
		process.exit(1);
	}

	/** Remove all `.turbo` directories */
	try {
		glob("**/*.turbo/", (error, result) => {
			if (error) throw new Error("Can't locate.turbo");
			result.forEach(folder => {
				fs.rm(folder, { force: true, recursive: true }, error => {
					if (error) throw new Error(`Failed to remove ${folder}`);
				});
			});
		});
	} catch (error) {
		console.error(`%s ${error}`, chalk.red.bold("ERROR"));
		process.exit(1);
	}

	/** Remove all `.next` directories */
	try {
		glob("**/*.next/", (error, result) => {
			if (error) throw new Error("Can't locate `.next`");
			result.forEach(folder => {
				fs.rm(folder, { force: true, recursive: true }, error => {
					if (error) throw new Error(`Failed to remove ${folder}`);
				});
			});
		});
	} catch (error) {
		console.error(`%s ${error}`, chalk.red.bold("ERROR"));
		process.exit(1);
	}
}

await cli().then(() => {
	/** Show log when finished */
	console.log("%s Removed files and folders", chalk.green.bold("DONE"));
});

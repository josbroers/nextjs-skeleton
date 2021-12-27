import {execSync} from "child_process";
import chalk from "chalk";
import {projectName, log, error} from "../create-nextjs-skeleton.mjs"
import {rmSync} from "fs";

const runCommand = (command) => {
	try {
		execSync(command, {stdio: 'pipe'})
	} catch (e) {
		error(`${chalk.red('Error:')} Failed to execute ${chalk.cyan(command)}:`)
		log()
		log(e)
		log()
		log('Cleaning up installation...')
		rmSync(projectName, {recursive: true, force: true});
		log()
		process.exit(1)
	}
}

export default runCommand
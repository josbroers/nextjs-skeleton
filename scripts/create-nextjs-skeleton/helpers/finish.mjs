import chalk from "chalk";
import {log} from "../create-nextjs-skeleton.mjs"

const finish = () => {
	log()
	log(`${chalk.greenBright("Congratulations, you're ready!")}`)
	log('You can use the following commands to develop, test and build:')
	log()
	log(`    - ${chalk.cyan('yarn dev')} ${chalk.dim('                     # Start a local dev server for all projects')}`)
	log(`    - ${chalk.cyan('yarn dev --scope=<app>')} ${chalk.dim('       # Start a local dev server for a specific project')}`)
	log(`    - ${chalk.cyan('yarn lint')} ${chalk.dim('                    # Test code using ESLint')}`)
	log(`    - ${chalk.cyan('yarn build lint --scope=<app>')} ${chalk.dim('# Build the application for production')}`)
	log(`    - ${chalk.cyan('yarn clean')} ${chalk.dim('                   # Remove `node_modules` and `yarn.lock`')}`)
	log(`    - ${chalk.cyan('yarn upgrade_all')} ${chalk.dim('             # Upgrade all packages in the project to the latest version')}`)
}

export default finish
import runCommand from "./runCommand.mjs";
import {writeFileSync} from 'fs';

const packageJson = {
	name: process.argv[2],
	private: true,
	"scripts": {
		"build": "turbo run build",
		"dev": "turbo run dev --no-cache --parallel --continue",
		"clean": "rm -rf node_modules && rm yarn.lock",
		"lint": "turbo run lint",
		"prepare": "husky install",
		"upgrade_all": "yarn upgrade-interactive --latest",
	},
	"workspaces": [
		"apps/*",
		"packages/*"
	],
	"devDependencies": {
		"eslint": "^8.5.0",
		"husky": "^7.0.4",
		"prettier": "^2.5.1",
		"turbo": "1.0.19"
	},
	"engines": {
		"node": ">=14.18.0"
	},
	"turbo": {
		"baseBranch": "origin/main",
		"pipeline": {
			"build": {
				"dependsOn": [
					"^build"
				],
				"outputs": [
					".next/**"
				]
			},
			"lint": {
				"outputs": []
			},
			"dev": {
				"cache": false
			}
		}
	}
}

const installDeps = () => {
	writeFileSync(`${process.argv[2]}/package.json`, JSON.stringify(packageJson, null, 2))
	runCommand(`cd ${process.argv[2]} && yarn`)
}

export default installDeps
#!/usr/bin/env node

import chalk from 'chalk'
import init from "./helpers/init.mjs"
import installDeps from "./helpers/installDeps.mjs"
import finish from "./helpers/finish.mjs"

const totalSteps = 3
let currentStep = 1

export const log = console.log
export const error = console.error
export const projectName = process.argv[2]

log()

// Step 1: Setup project
log(`${chalk.yellow(`[${currentStep}/${totalSteps}]`)} Setting up your project...`)
init(projectName)
currentStep++

// Step 2: Installing dependencies
log(`${chalk.yellow(`[${currentStep}/${totalSteps}]`)} Installing dependencies. This might take a couple of minutes.`)
installDeps()
currentStep++

// Step 3: Finish installation
log(`${chalk.yellow(`[${currentStep}/${totalSteps}]`)} Finishing the installation...`)
finish()
currentStep++
log()
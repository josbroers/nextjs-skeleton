import chalk from "chalk";

export const dirAlreadyExists = (dirName) => `Directory with name '${dirName}' already exists`;

export const installGit = "First install git";

export const installNode = "Please install Node.js ^18.0";

export const autoRunInstall = "Pass --install or -i to automatically install dependencies";

export const failedToDownload = "Failed to download the files";

export const projectReady = "Your project is ready!";

export const openYourProject = (dirName) => `Use ${chalk.magenta(`cd ${dirName}`)} to open your new Next.js project`;

export const gitInit = `Use ${chalk.magenta(`git init && git add . && git commit -m "Initial commit"`)} to initialize a git repository`;

export const scriptCommands = "You can use the following commands to develop, test and build:";

export const runDev = `- ${chalk.magenta("npm run dev")} ${chalk.dim("# Start a local dev server, e.g: http://localhost:3000")}`;

export const runLint = `- ${chalk.magenta("npm run lint")} ${chalk.dim("# Test your code using ESLint and Stylelint")}`;

export const runBuild = `- ${chalk.magenta("npm run build")} ${chalk.dim("# Build your application")}`;

export const runDeploy = `- ${chalk.magenta("npm run deploy")} ${chalk.dim("# Build and test your application to deploy")}`;

export const runstart = `- ${chalk.magenta("npm start")} ${chalk.dim("# Start a production server")}`;

export const downloadProjectFiles = "Downloading project files...";

export const configuringYourProject = "Configuring your project...";

export const installDependencies = "Installing dependencies...";

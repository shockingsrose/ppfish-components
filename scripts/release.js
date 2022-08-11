const inquirer = require('inquirer');
const chalk = require('chalk');
const { promisify } = require('util')
const { exec } = require('child_process');
const execAsync = promisify(exec);

const gitCommit = async (version) => {
  await execAsync(`git commit -m build:update version to ${version}`)
}

const gitPush = async (version) => {
  await execAsync(`git push --tags`)
}

(async () => {


  /** 检查工作区是否clean */
  const { stdout } = await execAsync(`git status -s`);
  if (stdout) {
    console.log(chalk.red('ERR! Git working directory not clean.'));
    return;
  }

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'newVersion',
      message: 'run npm version',
      choices: ['patch', 'minor', 'major', 'prerelease', 'prerelease:alpha', 'prerelease:dev'],
      loop: false,
    },
    // {
    //   type: 'confirm',
    //   name: 'release',
    //   message: 'is release version?',
    // },
    // {
    //   type: 'input',
    //   name: 'npmTag',
    //   message: 'npm tag(default: latest)',
    //   default: 'latest'
    // }
  ])

  let { newVersion } = answers;

  /** npm version */
  if (newVersion.includes('prerelease:')) {
    const [, preid] = newVersion.split('prerelease:');
    newVersion = `prerelease --preid=${preid}`
  }

  try {
    const { stdout } = await execAsync(`npm version ${newVersion}`);
    console.log(chalk.green(`new version: ${stdout}`));

    /** 生成changelog */
    await execAsync(`npm run changelog:init`);

    /** 提交commit */
    await gitCommit(version);

    /** git push --follow-tags */
    await gitPush()
  } catch (error) {
    console.log(chalk.red(error.stderr));
  }
})()
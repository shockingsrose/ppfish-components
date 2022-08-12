const { promises: fs } = require('fs');
const path = require('path');
const pkg = require('../package.json');
const core = require('@actions/core');
const { promisify } = require('util')
const { exec } = require('child_process');
const execAsync = promisify(exec);

// 判断是否要发布github page
const { DEPLOY_GITHUB_PAGES } = process.env;

const changeLogPath = path.join(__dirname, '../CHANGELOG.md');

/**
 * 检查当前版本是否需要发布
 * @param {string} version 当前package.json的version
 * @returns {boolean} true: 表示需要发布
 */
const checkVersionShouldRelease = async (version) => {
  const { stdout } = await execAsync('git tag');

  return !stdout.includes(version)
}

const run = async () => {
  const changeLogData = await fs.readFile(changeLogPath, { encoding: 'utf-8' })
  const version = pkg.version;

  /**获取最新版本changeLog */
  const [, changeLog] = /(###\s+[\w.]+\n[\s\S]+?)###/.exec(changeLogData);

  const outputs = { version, changeLog, deployGithubPages: !!DEPLOY_GITHUB_PAGES };

  const isPrerelease = /[\d.]+-[\w.]+/.test(version);
  outputs.prerelease = isPrerelease;


  /** 通过version判断应该发布什么类型的npm包 */
  const preid = version.replace(/[\d.-]/g, '');
  outputs.pubScript = preid ? `pub:${preid}` : 'pub';

  outputs.shouldRelease = await checkVersionShouldRelease(version);

  console.log(outputs);

  Object.entries(outputs).forEach(([key, value]) => {
    core.setOutput(key, value);
  })

}

run();
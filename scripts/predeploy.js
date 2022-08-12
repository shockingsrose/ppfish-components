const { promises: fs } = require('fs');
const path = require('path');
const pkg = require('../package.json');
const core = require('@actions/core')

// 判断是否要发布github page
const { DEPLOY_GITHUB_PAGES } = process.env;

const changeLogPath = path.join(__dirname, '../CHANGELOG.md');

const run = async () => {
  const changeLogData = await fs.readFile(changeLogPath, { encoding: 'utf-8' })
  const version = pkg.version;

  /**获取最新版本changeLog */
  const [, changeLog] = /(###\s+[\w.]+\n[\s\S]+?)###/.exec(changeLogData);

  const outputs = { version, changeLog, deployGithubPages: !!DEPLOY_GITHUB_PAGES };

  const isPrerelease = /[\d.]+-[\w.]+/.test(version);
  outputs.prerelease = isPrerelease;

  const getPreid = () => {
    return version.replace(/[\d.-]/g, '')
  }

  /** 通过version判断应该发布什么类型的npm包 */
  const preid = getPreid();
  outputs.pubScript = preid ? `pub:${preid}` : 'pub';
  console.log(`pubScript: ${outputs.pubScript}`);


  Object.entries(outputs).forEach(([key, value]) => {
    core.setOutput(key, value);
  })

}

run();
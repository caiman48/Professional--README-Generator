// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  const badges = {
    MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    GPLv3: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    Apache: '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    mozilla: '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)',
    none: '',
  };
  return badges[license];
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  const links = {
    MIT: 'https://opensource.org/licenses/MIT',
    GPLv3: 'https://www.gnu.org/licenses/gpl-3.0',
    Apache: 'https://opensource.org/licenses/Apache-2.0',
    mozilla: 'https://opensource.org/licenses/MPL-2.0',
    none: '',
  };
  return links[license];
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License
  This project is licensed under the ${license} license.
  For more information, please visit [${license}](${renderLicenseLink(license)}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`
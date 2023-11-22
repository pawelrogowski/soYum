const fs = require("fs");
const path = require("path");

const componentsDir = path.join(__dirname, "src", "components");
const indexFile = path.join(componentsDir, "index.js");

let exportString = "";

fs.readdirSync(componentsDir).forEach((dir) => {
  const componentDir = path.join(componentsDir, dir);
  if (fs.statSync(componentDir).isDirectory()) {
    const componentName = dir;
    exportString += `export { default as ${componentName} } from './${componentName}/${componentName}';\n`;
  }
});

fs.writeFileSync(indexFile, exportString);

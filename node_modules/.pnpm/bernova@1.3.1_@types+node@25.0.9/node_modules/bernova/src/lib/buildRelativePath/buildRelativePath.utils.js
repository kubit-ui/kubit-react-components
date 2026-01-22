const path = require('path');
/**
 * Builds a relative path from one location to another, handling both file paths and/or directory paths
 * 
 * @param {object} params 
 * @param {string} params.from - The origin path (can be a file path or directory path)
 * @param {string} params.to - The destination path (can be a file path or directory path)
 * @returns {string} - The relative path from 'from' to 'to', including the filename if 'to' is a file path
 */
const buildRelativePath = ({ from , to }) => {
  //* file names
  const fromFileName = path.basename(from);
  const toFileName = path.basename(to);

  const fromDir =
    fromFileName.includes('.') && from.includes(fromFileName)
      ? path.dirname(from)
      : path.normalize(from);
  const toDir =
    toFileName.includes('.') && to.includes(toFileName)
      ? path.dirname(to)
      : path.normalize(to);

  const relativePath = path.relative(fromDir, toDir);
  const fileName = toFileName.includes('.') ? toFileName : '';

  return path.join(relativePath, fileName);
}

module.exports = { buildRelativePath };
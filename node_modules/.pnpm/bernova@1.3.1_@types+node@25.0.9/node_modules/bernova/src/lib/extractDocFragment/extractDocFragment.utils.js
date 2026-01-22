/**
 * CSS Documentation Fragment Extractor for Bernova
 *
 * Extracts specific sections from CSS documentation using comment markers.
 * Used for partial compilation to preserve existing CSS sections.
 */

/**
 * Extracts a specific section from CSS documentation using regex matching
 * Looks for content between matching comment markers
 *
 * @param {object}
 * @param {string} param.section - Name of the section to extract
 * @param {string} param.doc - CSS document content to search in
 * @param {string} param.endSection - Optional different end section name
 * @returns {string} Extracted section content (trimmed) or empty string if not found
 */
const extractDocFragment = ({ section, doc, endSection }) => {
  const start = section;
  const end = endSection || section;
  // Create regex pattern to match section markers
  const matcher = new RegExp(`/\\* ${start} \\*/([\\s\\S]*?)/\\* ${end} \\*/`);
  const match = doc.match(matcher);
  return match ? match[1].trim() : '';
};

module.exports = { extractDocFragment };

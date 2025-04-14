const fs = require('fs');
const path = require('path');

// Path to Chart.tsx file
const chartFilePath = path.join(__dirname, '..', 'components', 'Chart.tsx');

console.log('Patching Chart.tsx file...');

try {
  // Read the file content
  let content = fs.readFileSync(chartFilePath, 'utf8');
  
  // Replace the problematic grid configuration
  const problematicCode = `grid: {
          drawBorder: false,
        },`;
  
  const fixedCode = `// grid configuration removed to fix type error`;
  
  // Make the replacement
  const patchedContent = content.replace(problematicCode, fixedCode);
  
  // Write the file back
  fs.writeFileSync(chartFilePath, patchedContent, 'utf8');
  
  console.log('Successfully patched Chart.tsx file!');
} catch (error) {
  console.error('Error patching Chart.tsx file:', error);
  process.exit(1);
} 
const fs = require('fs');
const path = require('path');

// Path to Chart.tsx file
const chartFilePath = path.join(__dirname, '..', 'components', 'Chart.tsx');
const fixedChartFilePath = path.join(__dirname, '..', 'components', 'Chart.tsx.fixed');

console.log('Patching Chart.tsx file...');

try {
  // Read the file content
  let content = fs.readFileSync(chartFilePath, 'utf8');
  
  console.log('Original Chart.tsx content length:', content.length);
  
  // First approach: Try to replace the problematic grid configuration
  let patchedContent = content.replace(/grid:\s*\{\s*drawBorder:\s*false,\s*\},/g, '');
  
  // Second approach: If the above doesn't work, try a more comprehensive replacement
  if (patchedContent === content) {
    // Create a new options object with the correct structure
    patchedContent = content.replace(
      /const\s+options[\s\S]*?scales:\s*\{[\s\S]*?y:[\s\S]*?\{[\s\S]*?\},[\s\S]*?x:/g,
      `const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'end' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
      x:`
    );
  }
  
  // Third approach: If we have a fixed file, use it as a last resort
  if (patchedContent === content && fs.existsSync(fixedChartFilePath)) {
    console.log('Using fixed backup file instead...');
    patchedContent = fs.readFileSync(fixedChartFilePath, 'utf8');
  }
  
  console.log('Patched Chart.tsx content length:', patchedContent.length);
  
  // Write the file back
  fs.writeFileSync(chartFilePath, patchedContent, 'utf8');
  
  console.log('Successfully patched Chart.tsx file!');
} catch (error) {
  console.error('Error patching Chart.tsx file:', error);
  process.exit(1);
} 
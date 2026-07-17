const fs = require('fs');
const data = JSON.parse(fs.readFileSync('www.apertef1.com.br-20260716T205655.json', 'utf8'));

const categories = data.categories;
const audits = data.audits;

console.log('--- ACCESSIBILITY (Acessibilidade) ---');
const a11yRefs = categories.accessibility.auditRefs.filter(ref => ref.weight > 0);
a11yRefs.forEach(ref => {
  const audit = audits[ref.id];
  if (audit.score !== null && audit.score < 1) {
    console.log(`[Score: ${audit.score}] ${audit.title}`);
    console.log(`    ${audit.description}`);
    if (audit.details && audit.details.items) {
      audit.details.items.forEach(item => {
        if (item.node) console.log(`    - Falha no elemento: ${item.node.snippet}`);
      });
    }
  }
});

console.log('\n--- PERFORMANCE (Desempenho) ---');
const perfRefs = categories.performance.auditRefs.filter(ref => ref.weight > 0);
perfRefs.forEach(ref => {
  const audit = audits[ref.id];
  if (audit.score !== null && audit.score < 1) {
    console.log(`[Score: ${audit.score}] ${audit.title}`);
    if (audit.displayValue) {
        console.log(`    Impacto/Valor: ${audit.displayValue}`);
    }
    if (audit.details && audit.details.items && audit.details.items.length > 0) {
      // Just log first 3 items to avoid clutter
      audit.details.items.slice(0, 3).forEach(item => {
        if (item.url) console.log(`    - ${item.url}`);
        else if (item.node) console.log(`    - ${item.node.snippet}`);
      });
    }
  }
});

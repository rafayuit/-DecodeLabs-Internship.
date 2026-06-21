// Simple sanity test - confirms the app files load without crashing
try {
  require('./app.js');
  console.log("✅ app.js loaded successfully");
} catch (err) {
  console.error("❌ app.js failed to load:", err.message);
  process.exit(1);
}

try {
  require('./processor.js');
  console.log("✅ processor.js loaded successfully");
} catch (err) {
  console.error("❌ processor.js failed to load:", err.message);
  process.exit(1);
}

console.log("All tests passed!");

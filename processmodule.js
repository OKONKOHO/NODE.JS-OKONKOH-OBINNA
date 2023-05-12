process.on('exit', (code) => {
  console.log(`Process exited with code ${code}`);
});

console.log(`Process ID: ${process.pid}`);
console.log(`Process platform: ${process.platform}`);
console.log(`Process version: ${process.version}`);

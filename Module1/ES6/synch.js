// Synchronous Code Execution

const colors = ['red', 'green', 'blue'];

console.log('BEFORE the forEach...');

colors.forEach(function(color, idx) {
    console.log(`${idx + 1} - ${color}`);
});

console.log('AFTER the forEach...');
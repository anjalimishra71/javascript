var interval = setInterval(warning, 3000);
function warning() {
console.log('3 second warning');
clearInterval(interval);
}
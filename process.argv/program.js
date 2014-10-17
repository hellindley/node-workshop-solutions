
var result = 0;
for(var i = 2; i < process.argv.length; i++) {
    result += parseInt(process.argv[i], 10);
}

console.log(result);
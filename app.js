var fs = require('fs');

function allPossibleCombinations(input, length, curstr) {
    if(curstr.length == length) return [ curstr ];
    var ret = [];
    for(var i = 0; i < input.length; i++) {
        ret.push.apply(ret, allPossibleCombinations(input, length, curstr + input[i]));
    }
    return ret;
}
var input = [ '1', '3', '5', '7', '9'];
var all = allPossibleCombinations(input, 7, '')

for(i=0;i<all.length + 1;i++){

var value = all[i],
    sum = value
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);


	console.log(sum+" = "+all[i])

}

//fs.createWriteStream(dir + '/node.access.log', { flags: 'a' })

//fs.writeFileSync('allcontent.txt', arra[0][i]);

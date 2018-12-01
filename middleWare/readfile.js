var fs = require("fs");
var ifile = "sometext.txt";

console.log("Started reading the file "+ ifile);

fs.readFile(ifile, (err, data)=> {
    console.log("File Contents: " + data + '');
    console.log("Finished reading the file");
});

console.log("Submitted Asynch request to read the file "+ ifile);
var fs = require("fs");
var ifile = "sometext.txt";
var ofile = "newfile.txt";

var myWritefile = function(data) {
    console.log("Writing Contents of " + ifile + " to the file " + ofile);
    fs.writeFile(ofile, data, (err) => {
        console.log("Finished writing to the file");
    });
}
console.log("Started reading the file "+ ifile);

fs.readFile(ifile, (err, data)=> {
    console.log("Finished reading the file");
    myWritefile(data);
});

console.log("Submitted Asynch request to read the file "+ ifile + " and write the contents to file " + ofile);
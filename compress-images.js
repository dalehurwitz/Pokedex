var fs = require("fs"),
    tinify = require("tinify");

tinify.key = "qWvATNXp0Zb0gCbwNOJYE2545EYQWJYN";

var imageDir = "./dist/images/pokemon/",
    compressedImageDir = imageDir + "compressed/";

fs.readdir(imageDir, function(err, files) {
    var images = files.filter(function(fileName) {
        return /(\b.png)$/.test(fileName);
    });

    images.forEach(function(fileName) {
        console.log("Compressing: " + fileName);
        var source = tinify.fromFile(imageDir + fileName);
        source.toFile(compressedImageDir + fileName);
    });
});

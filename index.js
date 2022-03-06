var fs = require('fs'),
request = require('request');
var data = require('./datos.json');

var download = function (url, dest, callback) {
  request.get(url)
      .on('error', function (err) { console.log(err) })
      .pipe(fs.createWriteStream(dest))
      .on('close', callback);
};

setDownload = (url, extension,filename, index) => {
  filename = filename.replace(/[^a-zA-Z ]/g, "");
  download(url, './downloads/'+filename+index+'.'+extension, function(){
  console.log('done '+index);
});
}

async function prepareDownload() {
  try {
    const promises =  new Promise((resolve, reject) => {
      data.forEach(x => 
        {
            x.images.map((image, index) => setDownload(image, image.substr(image.lastIndexOf('.') + 1),x.title,index));
        });   
        resolve();    
   });
    await promises;
  } catch (error) {
     console.log(error);
  }
}

prepareDownload();



 

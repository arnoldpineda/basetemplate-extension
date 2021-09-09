var zip = require('file-zip');

zip.zipFolder(
    [
        './dist/',
        './icons',
        './src/libs',
        './src/templates'
    ]
    ,'release.zip',function(err){
    if(err){
        console.log('zip error',err)
    }else{
        console.log('zip success');
    }
});
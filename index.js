let Client = require('ssh2-sftp-client');
const path = require('path');
let sftp = new Client();
sftp.connect({
  host: '192.168.5.165', // 服务器 IP
  port: '22',
  username: 'kali',
  password: 'kali'
}).then(() => {
  return sftp.put(path.join(__dirname, 'dist/storage/index.html'),"/home/kali/vue/index.html");
}).then(data => {
  console.log(data, 'the data info');
  sftp.end();
}).catch(err => {
  console.log(err, 'catch error');
  sftp.end();
});

// function put(localPath, romotePath) {
//     let sftp = new Client();
//     sftp.connect({
//         host: '192.168.5.165', // 服务器 IP
//         port: '22',
//         username: 'kali',
//         password: 'kali'
//      }).then(() => {
//          // 上传文件
//          return sftp.fastPut(localPath, romotePath);
//          // 下载文件
//         //  return sftp.get(localPath, romotePath);
//      }).then((data) => {
//          console.log(localPath + "上传完成");
//         //  console.log(localPath + "下载完成");
//          sftp.end();
//      }).catch((err) => {
//          console.log(err, 'catch error');
//      });
//  }
//  let srcPath = __dirname+'/dist/index.html',
//      localPath = path.join(__dirname, 'dist/index.html'),
//      romotePath = '/vue';

//  // 上传文件
//  // 第一个参数是需要上传的文件的本地路径；第二个参数是服务器存放的地址
//  // put(localPath, romotePath);
//  // 下载文件
//  // 第一个参数是需要下载的文件在服务器存放的地址；第二个参数是本地存放的路径
//  put(romotePath, srcPath);
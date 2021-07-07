//const base       = "file://"+process.cwd()+"/ztest/";
const base       = "https://jeff-zucker.solidcommunity.net/public/z/ztest1/";
const folderName = "new-folder";
const fileName   = "foo.txt";
const folder     = base + folderName + "/";
const file       = base + folderName + "/" + fileName;

async function run(){
  await client.login();
  let res = await postFolder(base,folderName);
  console.log(res.url)
  res = await postFile(folder,fileName);
  console.log(res.url)
}
async function main(){
  await clean();
  await PUT(base);
  await run();
  await clean();
}
async function clean(){
  await DELETE(file);
  await DELETE(folder);
  await DELETE(base);
}

const {SolidNodeClient} = require('../');
const client = global.client = new SolidNodeClient();
//const {SolidRestFile} = require('../');
//const client = global.client = new SolidRestFile();
const r = require('./rest-methods')
const [PUT,DELETE]=[r.PUT,r.DELETE];
const [postFile,postFolder]=[r.postFile,r.postFolder];
main();


const dependencies = require('./package.json').dependencies || {};
const Fs = require('fs');
const { promises: fs } = require("fs")

const SDKList = [
  {
    name: 'sdk',
    path: './node_modules/@openswap/sdk/dist/index.js'
  },
  {
    name: 'chainlink-sdk',
    path: './node_modules/@validapp/chainlink-sdk/dist/index.js'
  },
  {
    name: 'oracle-adaptor-sdk',
    path: './node_modules/@openswap/oracle-adaptor-sdk/dist/index.js'
  }
]

const GlobalBuildModuleList = [
  {
    sourceFilePath: 'src/assets/index.ts',
    distFilePath: './dist/assets/index.js',
    moduleName: '@buyback/assets'
  },
  {
    sourceFilePath: 'src/global/index.ts',
    distFilePath: './dist/global/index.js',
    moduleName: '@buyback/global'
  },
  {
    sourceFilePath: 'src/store/index.ts',
    distFilePath: './dist/store/index.js',
    moduleName: '@buyback/store'
  },
  {
    sourceFilePath: 'src/queue-utils/index.ts',
    distFilePath: './dist/queue-utils/index.js',
    moduleName: '@buyback/queue-utils'
  },
  {
    sourceFilePath: 'src/swap-utils/index.ts',
    distFilePath: './dist/swap-utils/index.js',
    moduleName: '@buyback/swap-utils'
  },   
  {
    sourceFilePath: 'src/buyback/index.tsx',
    distFilePath: './dist/buyback/index.js',
    moduleName: '@buyback/buyback'
  }
]

const GlobalModuleESBuildConfig = {
  entryPoints: GlobalBuildModuleList.map(v => v.sourceFilePath),
  external: [
    '@buyback/assets', 
    '@ijstech/components',
    '@ijstech/eth-wallet',
    '@buyback/global',
    '@buyback/store',
    '@openswap/sdk',
    '@validapp/bakery-swap-sdk',
    '@validapp/trader-joe-sdk',
    '@scom/impossible-swap-sdk',
    '@validapp/chainlink-sdk',
    '@validapp/time-is-money-sdk',
    '@openswap/oracle-adaptor-sdk',
    '@buyback/queue-utils',
    '@buyback/swap-utils',
    '@buyback/buyback',
    ...Object.keys(dependencies)
  ]
}

const LocalModuleESBuildConfig = {
  entryPoints: [
    'src/buyback/index.tsx',
  ],
  external: [
    '@buyback/assets',
    '@buyback/global',
    '@buyback/store',
    '@ijstech/components', 
    '@ijstech/eth-wallet', 
    '@openswap/sdk',
    '@validapp/bakery-swap-sdk',
    '@validapp/trader-joe-sdk',
    '@scom/impossible-swap-sdk',
    '@validapp/chainlink-sdk',
    '@validapp/time-is-money-sdk',
    '@openswap/oracle-adaptor-sdk',
    '@buyback/queue-utils',
    '@buyback/swap-utils',
    '@buyback/buyback',
    ...Object.keys(dependencies)
  ]
}

async function readFile(fileName) {
  return new Promise((resolve, reject) => {
      Fs.readFile(fileName, 'utf8', function (err, data) {
          if (err)
              reject(err)
          else
              resolve(data)
      })
  })
}

async function writeContent(filePath, moduleName) {
  let content = await readFile(filePath);
  content = `define("${moduleName}",(require, exports)=>{
  ${content}  
  });`
  Fs.writeFileSync(filePath, content);
}

async function buildSDKs() {
  const sdksPath = './dist/sdks/';
  for (let sdk of SDKList) {
    await fs.mkdir(sdksPath + sdk.name, { recursive: true });
    const content = await readFile(sdk.path)
    Fs.writeFileSync('./dist/sdks/' + sdk.name + '/index.js', content);
  }
}

async function buildGlobalModule() {
  await require('esbuild').build({
    ...GlobalModuleESBuildConfig,
    outdir: 'dist',
    bundle: true,
    minify: false,
    format: 'cjs',
    target: 'ES2017',
    jsx: 'transform',
    plugins: [],
  }).catch(() => process.exit(1));

  await Promise.all(GlobalBuildModuleList.map(v => writeContent(v.distFilePath, v.moduleName)));

  await buildSDKs();
}

async function buildLocalModule() {
  require('esbuild').build({
    ...LocalModuleESBuildConfig,
    outdir: 'dist',
    bundle: true,
    minify: false,
    format: 'iife',
    target: 'ES2017',
    jsx: 'transform',
    plugins: [],
  }).catch(() => process.exit(1));
}

buildLocalModule();
buildGlobalModule();
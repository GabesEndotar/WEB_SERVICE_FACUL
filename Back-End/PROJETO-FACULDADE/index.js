const webServer = require('./services/web-server.js');
const database = require('./services/database.js');
const dbConfig = require('./config/database.js');
const defaultThreadPoolSize = 4;

// Increase thread pool size by poolMax
process.env.UV_THREADPOOL_SIZE = dbConfig.hrPool.poolMax + defaultThreadPoolSize;

async function startup() {
  console.log('Iniciando aplicação');

  try {
    console.log('Inicializando módulo do banco de dados');

    await database.initialize();
  } catch (err) {
    console.error(err);

    process.exit(1); 
  }

  try {
    console.log('Inicializando módulo do servidor Web');

    await webServer.initialize();
  } catch (err) {
    console.error(err);

    process.exit(1); 
  }
}

startup();

async function shutdown(e) {
  let err = e;

  console.log('Desligando aplicação');

  try {
    console.log('Fechando módulo do servidor Web');

    await webServer.close();
  } catch (e) {
    console.error(e);

    err = err || e;
  }

  try {
    console.log('Fechando módulo do banco de dados');

    await database.close();
  } catch (e) {
    console.log('Erro encontrado', e);

    err = err || e;
  }

  console.log('Saindo do processo atual');

  if (err) {
    process.exit(1); // Non-zero failure code
  } else {
    process.exit(0);
  }
}

process.on('SIGTERM', () => {
  console.log('Received SIGTERM');

  shutdown();
});

process.on('SIGINT', () => {
  console.log('Received SIGINT');

  shutdown();
});

process.on('uncaughtException', err => {
  console.log('Uncaught exception');
  console.error(err);

  shutdown(err);
});
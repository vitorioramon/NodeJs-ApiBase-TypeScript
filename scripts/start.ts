import { AddressInfo } from 'net';
import { App } from '../src/app';
import { ApplicationInfo } from '../src/shared/application-info';
const log = require('debug')('api-server:start');

if (!process.env.API_PORT) {
  console.error("PORTA da API não configurada");
  process.exit();
}

const apiPort = process.env.API_PORT;
const app = new App().server.listen(apiPort);

app.on('error', onError);
app.on('listening', onListening);

function onError(error: any) {
  log("SERVER ERROR:", error);
}

function onListening() {
  const { port } = app.address() as AddressInfo;
  log(`${ApplicationInfo.Descricao} - versão ${ApplicationInfo.Versao} iniciada na porta ${port}`);
}
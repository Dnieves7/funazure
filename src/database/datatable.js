const AzureTables = require("@azure/data-tables");

const { 
    TableServiceClient, 
    AzureNamedKeyCredential,
    TableClient 
} = require("@azure/data-tables");

//Conectar los servicios
const account = process.env.ACCOUNT;
const accountKey = process.env.ACCOUNTKEY;
const credential = new AzureNamedKeyCredential(account, accountKey);

const serviceClient = new TableServiceClient(
    `https://${account}.table.core.windows.net`,
  credential
);


async function listatablas() {
    let tablesIter = serviceClient.listTables();
    var tables  = [];
    for await (const table of tablesIter) {
      //console.log(`Table${i}: ${table.name}`);
     tables.push({name:table.name})
    }
    return tables
}

async function creartablas(tablename){
    /**
     * @tableName {str}
     */
    await serviceClient.createTable(tablename);
}
async function addEntity(tableName, testEntity){
/**
 * @tableName str
 * @testEntity obj
 */

const client = new 
TableClient(`https://${account}.table.core.windows.net`,tableName, credential);
await client.createEntity(testEntity);
}
function hola() {
    return "Hola Mundo";
}

async function listEntities(tableName){
    const client = new TableClient(`https://${accountName}.table.core.windows.net`, tableName, credential);
    let entitiesIter = client.listEntities();
    let entities = []
    for await(const entity of entitiesIter){
        entities.push({entity: entity.partitionKey})
    }
    return entities
}
module.exports = {
    hola,
    listatablas, 
    creartablas,
    addEntity
}
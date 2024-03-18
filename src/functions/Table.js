//const { TableTransaction } = require('@azure/data-tables');
const { app } = require('@azure/functions');
const { listatablas, creartablas } = require('../database/datatable');

app.http('Table', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
       if(request.method == "POST"){
        const body = await request.json() || ""; ///crea tabla
        tableName = body.name;

        await creartablas(tableName)
        return {body: `Tabla creada correctamente`};
       }
       else if (request.method == "GET")
       {
        tables = await listatablas();
        return {body:  JSON.stringify(tables)};
       }
    }
});

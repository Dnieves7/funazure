const { app } = require('@azure/functions');
const {addEntity}=require('../database');

app.http('entity', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        if(request.method == "POST"){
            const TableName = request.query.get('tablename');
            const body = await request.json() || "";
            const entity = body;
            await addEntity(TableName, entity)

            return{body: `Tabla llenada correctamente`};
        }
    }
});

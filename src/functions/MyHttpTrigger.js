const { app } = require('@azure/functions');
const {listatables} = require ('../database')

app.http('MyHttpTrigger', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
    
       const name = request.query.get('name') || await request.text() || 'world';
       const body = request.body;
       console.log(body);

       const param = request.param;
       console.log(param);
    

        return { body: `Hello, ${name}!` };
    }
});

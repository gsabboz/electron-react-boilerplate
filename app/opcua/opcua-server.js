import * as opcua from 'node-opcua';


let server = new opcua.OPCUAServer({
  port: 4334,
  resourcePath: 'example/opcuaServer',
  endpoint_must_exist: false
});



export const startOpcuaServer = () => {
  console.log('Starting opcua server');
  server.start(function(err) {
    if (err != null)
      console.log(err);
  });

  server.on('post_initialize', function() {
    const endpointUrl = server.endpoints[0].endpointDescriptions()[0].endpointUrl;
    console.log(' the primary server endpoint url is ', endpointUrl);
  });
};

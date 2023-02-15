const serveStatic = require('serve-static');
const finalHandler = require('finalhandler');
const officeDevCerts = require('office-addin-dev-certs');
const https = require('https');

const port = 3000;
const appBundlePath = "bin/Release/net7.0/browser-wasm/AppBundle";

// Office addins must have cross-origin headers populated
function setHeaders (res, path) {
    res.setHeader("Access-Control-Allow-Origin", "*");
}

const serve = serveStatic(appBundlePath, { index: false, setHeaders });

officeDevCerts.getHttpsServerOptions().then((httpsOptions) => {
    const server = https.createServer(httpsOptions, (req, res) => {
        console.log(`${req.method} ${req.url}`);
        const done = finalHandler(req, res);
        serve(req, res, done);
    });
    
    server.listen(port);
});

import { dotnet } from './dotnet.js'

function initDotNet() {
    let exports;

    const { getAssemblyExports, getConfig } = await dotnet.create();
    
    exports = await getAssemblyExports(getConfig().mainAssemblyName);
    
    await dotnet.run();
    return exports;
}

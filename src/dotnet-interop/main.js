// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

import { dotnet } from './dotnet.js'

const { setModuleImports, getAssemblyExports, getConfig } = await dotnet
    .withDiagnosticTracing(false)
    .withApplicationArgumentsFromQuery()
    .create();





const text = exports.MyClass.Greeting();
console.log(text);

document.getElementById('out').innerHTML = text;


Office.onReady((info) => {
    if (info.host === Office.HostType.Outlook) {
        document.getElementById('runButton').onclick = exports.AddinActions.HandleButtonClick;
    }
});

await dotnet.run();

export async function setupRuntimeAndGetExports(imports) {
    // Sets all the functions which will be required by the .NET portion of the code. These can
    // be accessed by [JSImport] statements on the C# side.
    setModuleImports('main.js', imports);

    const config = getConfig();
    const exports = await getAssemblyExports(config.mainAssemblyName);

    await dotnet.run();

    return exports;
}

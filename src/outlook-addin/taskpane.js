/* global Office */

const imports = {
    getSelectedMailboxItem: () => Office.context.mailbox.item,
    setOutText: (outText) => {
        document.getElementById("out").textContent = outText;
    }
};

const mainJsPath = "./node_modules/dotnet-interop/main.js"
const { setupRuntimeAndGetExports } = await import(mainJsPath);

const exports = setupRuntimeAndGetExports(imports).then(() => {
    Office.onReady((info) => {
        if (info.host === Office.HostType.Outlook) {
            document.getElementById('runButton').onclick = exports.AddinActions.HandleButtonClick;
        }
    });
});

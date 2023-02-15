/* global Office */

import { setupRuntimeAndGetExports } from "dotnet-interop/main";

const imports = {
    getSelectedMailboxItem: () => Office.context.mailbox.item,
    setOutText: (outText) => {
        document.getElementById("out").textContent = outText;
    }
};

const exports = await setupRuntimeAndGetExports(imports);

Office.onReady((info) => {
    if (info.host === Office.HostType.Outlook) {
        document.getElementById('runButton').onclick = exports.AddinActions.HandleButtonClick;
    }
});


/* global Office */

export default {
    getSelectedMailboxItem: () => Office.context.mailbox.item,
    setOutText: (outText) => {
        document.getElementById("out").textContent = outText;
    }
};

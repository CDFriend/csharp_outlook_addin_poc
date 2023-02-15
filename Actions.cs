using System.Runtime.InteropServices.JavaScript;

public partial class AddinActions {
    [JSExport]
    public static void HandleButtonClick() {
        string subject = Interop.GetSelectedMailboxItem().GetPropertyAsString("subject");
        Interop.SetOutText("Subject: " + subject);
    }

    private partial class Interop {
        [JSImport("outlook.getSelectedMailboxItem", "main.js")]
        internal static partial JSObject GetSelectedMailboxItem();

        [JSImport("outlook.setOutText", "main.js")]
        internal static partial void SetOutText(string outText);
    }
}
using System;
using System.Runtime.InteropServices.JavaScript;
using System.Threading.Tasks;

namespace TodoMVC
{
    public partial class MainJS
    {
        public static async Task Main()
        {
            if (!OperatingSystem.IsBrowser())
            {
                throw new PlatformNotSupportedException("This demo is expected to run on browser platform");
            }

            await JSHost.ImportAsync("todoMVC/store.js", "./store.js");
            await JSHost.ImportAsync("todoMVC/view.js", "./view.js");

            Console.WriteLine("Ready!");
        }
    }
}
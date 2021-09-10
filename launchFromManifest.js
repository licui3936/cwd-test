const { connect } = require("hadouken-js-adapter");

async function launchApp() {
    // connecto to runtime and start an app, permission is specified in manifest file. This url is not matched. So it will use default settings in desktop owner settings.
    const fin  = await connect({
        uuid: "app-test",
        manifestUrl: "http://localhost:5555/app2.json",
        nonPersistent: true
    });

    const version = await fin.System.getVersion();
    console.log("Connected to runtime version", version);

    // Permission cannot control the below call from node. This is expected.
    /*
    await fin.System.launchExternalProcess({
        path: "notepad",
        arguments: "",
        listener: function (result) {
            console.log('the exit code', result.exitCode);
        }
    });*/
}

launchApp().then(() => {
    console.log("success");
}).catch((err) => {
    console.log("Error trying to connect,", err.message);
    console.log(err.stack);
});

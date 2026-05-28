document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("issue").innerHTML =
        "Hello from ScriptRunner Fragment";

    document.getElementById("btn").addEventListener("click", function () {

        document.getElementById("time").innerHTML =
            "Current Time: " + new Date().toLocaleTimeString();

    });

});

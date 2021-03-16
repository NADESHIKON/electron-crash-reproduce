const element = document.createElement('embed');
element.type = "application/x-mpvjs";
const path = require("path");

document.body.append(element)

const { MpvJs } = require('mpv.js-vanilla'), mpv = new MpvJs(mpv => {
    mpv.property("hwdec", "auto");
    mpv.command("loadfile", path.join(__dirname, "tos.mkv"));
});

var canvasTest = function() {
    canvasData = "Not supported";

    var div = document.createElement('div');
    var s = "<canvas height='60' width='400'></canvas>";
    div.innerHTML = s;
    canvas = div.firstChild;

    canvasContext = canvas.getContext("2d");
    canvas.style.display = "inline";
    canvasContext.textBaseline = "alphabetic";
    canvasContext.fillStyle = "#f60";
    canvasContext.fillRect(125, 1, 62, 20);
    canvasContext.fillStyle = "#069";
    canvasContext.font = "11pt no-real-font-123";
    canvasContext.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15);
    canvasContext.fillStyle = "rgba(102, 204, 0, 0.7)";
    canvasContext.font = "18pt Arial";
    canvasContext.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45);
    return canvas;
  }

//impelement your data collection functions here

function getBrowserFingerprint() {
  browserFingerprint = "";
  // concat your collected data together as the browserFingerprint
  
  return browserFingerprint;
}

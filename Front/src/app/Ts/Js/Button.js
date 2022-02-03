var Button = /** @class */ (function () {
    function Button() {
        console.log("Constructor works!");
        var button = document.getElementById("GetButton");
        if (button != null) {
            button.onclick = Button.run;
        }
    }
    Button.run = function () {
        console.log("Works!");
        alert("Works!");
        //alert(this.get());
    };
    Button.prototype.get = function () {
        var adress = "";
        var httpCon = new XMLHttpRequest();
        httpCon.open("GET", adress);
        httpCon.send(null);
        return httpCon.responseText;
    };
    return Button;
}());
//# sourceMappingURL=Button.js.map
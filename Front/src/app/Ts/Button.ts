class Button{
  constructor() {
    console.log("Constructor works!");
    let button = document.getElementById("GetButton");
    if (button != null) {
      button.onclick = Button.run;
    }
  }

  static run(){
    console.log("Works!");
    alert("Works!");
    //alert(this.get());
  }

  private get():string{
    let adress: string = "";
    let httpCon: XMLHttpRequest = new XMLHttpRequest();
    httpCon.open("GET", adress);
    httpCon.send(null);
    return httpCon.responseText;
  }
}

function run(){
    let Htmlcode = document.getElementById("html-code").value;
    let csscode = document.getElementById("css-code").value;
    let jscode = document.getElementById("js-code").value;
    let OutPut = document.getElementById("output");
    OutPut.contentDocument.body.innerHTML = Htmlcode + "<style>" + csscode + "</style";
    OutPut.contentWindow.eval(jscode);
}

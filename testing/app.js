

function compile(){
  var form = document.querySelector("form");
  console.log("before"+form.elements[0].value);
  // var $gray-base = document.getElementById("input-@gray-base")
  document.getElementById("h1color").setAttribute("color", form.elements[0].value);

  var h1color = document.getElementById("h1color").getAttribute("color");

  document.getElementById("h2color").setAttribute("color", form.elements[2].value);

  var h2color = document.getElementById("h2color").getAttribute("color");
  document.getElementById("h3color").setAttribute("color", form.elements[4].value);

  var h3color = document.getElementById("h3color").getAttribute("color");

  document.getElementById("h1size").setAttribute("font-size", form.elements[1].value);

  var h1size = document.getElementById("h1size").getAttribute("font-size");

  document.getElementById("h2size").setAttribute("font-size", form.elements[3].value);

  var h2size = document.getElementById("h2size").getAttribute("font-size");
  console.log(form.elements[5].value);
  document.getElementById("h3size").setAttribute("font-size", form.elements[5].value);

  var h3size = document.getElementById("h3size").getAttribute("font-size");
  console.log(h3size);


        //       var file_content =fs.readFileSync("variables.json");
        // var content = JSON.parse(file_content);
        // var val1 = content.val1;
        // content.val1 = 42;

//Serialize as JSON and Write it to a file
    // fs.writeFileSync('variables.json', JSON.stringify(content));

var xmlhttp = new XMLHttpRequest();
var url = "http://192.168.1.15:3000/sass";
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myJson = JSON.parse(xmlhttp.responseText);
        console.log(myJson.color);
        myFunction(myJson);
        // console.log("myArr length"+xmlhttp.responseText.length);



    }

};
xmlhttp.open("GET", url, true);
xmlhttp.send();





function myFunction(myjson) {


    myjson.color.h1  = h1color;
    myjson.color.h2  = h2color;
    myjson.color.h3 = h3color;
    myjson.font.large = h1size;
    myjson.font.medium = h2size;
    myjson.font.small = h3size;


    var out  = myjson;
    run(out);
    out=JSON.stringify(out);
    console.log(out);
    // alert(out);



    var url = 'variables.json' ;
    window.open(url);
    window.focus();
    localStorage.setItem('variables.json', JSON.stringify(out));



    console.log("halaluya");

      // var ForAppending = 8;
      // var TriStateFalse = 0;
      // var fso = new ActiveXObject("Scripting.FileSystemObject");
      // var newFile = fso.OpenTextFile("/home/korra.naik/Innoplexus/Sass/testing/variables.json",
      // ForWriting, true, TriStateFalse);
}

function run(out){
  console.log("in out");
  var xhttp = new XMLHttpRequest();
  console.log("in out");
      xhttp.open("POST", "http://192.168.1.15:3000/sass",true);
      xhttp.setRequestHeader('Content-Type', 'application/json');
      console.log("in out");
      xhttp.send(JSON.stringify(out));
      console.log(out);
      // xhr1.send_header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
      // xhttp.onreadystatechange = function () {
      //   console.log("in out");
      //     if (xhttp.readyState == 4  && xhttp.status == 200) {
      //         alert(xhttp.responseText);
      //         xhttp.send(JSON.stringify(out));
      //         console.log(out);
      //     }
      //
      // }


}



}

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>scrollTop demo</title>
  <style>
  p {
    margin: 10px;
    padding: 5px;
    border: 2px solid #666;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
</head>
<body>
 
<p>Hello</p><p>  sdf
  
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  rty
  tr
  ytry</p>

<p>

</p> 
<script>
//var p = $( "p" ).last();
var p = $("p:eq(1)"), e = "true";

$(function() { var t = 67; console.log("I'm ready...."); });

$( "p" ).last().text( "scrollTop:" + p.scrollTop() );

e === "true" && (console.log("ugur"));

$(window).scroll(function() {
$( "p" ).last().text( "scrollTop:" + ($(window).scrollTop() +  $(window).height() - p.offset().top - p.height()) );

console.log($(window).scrollTop() +  $(window).height() - p.offset().top, $(window).scrollTop(), $(window).height(), p.offset().top,  p.height(), ($(window).scrollTop() +  $(window).height() - p.offset().top - p.height()));

$(window).scrollTop() +  $(window).height() - p.offset().top >= p.height() && 
console.log("------------------- yükle");

}
)
</script>
 
</body>
</html>

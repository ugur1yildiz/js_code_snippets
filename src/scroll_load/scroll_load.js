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

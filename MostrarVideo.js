function MostrarVideo(idok)
{
var contenedor = document.getElementById('divInnerVideo');
if(idok == "")
{
contenedor.innerHTML = "";
}
else
{
var dimensiones = "width='600' height='630' frameborder='0'";
var url = "http://www.ok.ru/videoembed/" + idok;
contenedor.innerHTML = "<iframe " + dimensiones + " src='"+ url +"'></iframe>";
}
}

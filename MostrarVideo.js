function MostrarVideo(idopenload)
{
var contenedor = document.getElementById('divInnerVideo');
if(idopenload == "")
{
contenedor.innerHTML = "";
}
else
{
var dimensiones = "width='600' height='630' frameborder='0'";
var url = "http://openload.co/embed/"+ idopenload;
contenedor.innerHTML = "<iframe " + dimensiones + " src='"+ url +"'></iframe>";
}
}

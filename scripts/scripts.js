let visible = false

function moMenu()
{
    if(visible)
    {
        $("#nav").removeClass("responsive")
        visible = false
    }
    else
    {
        $("#nav").addClass("responsive")
        visible = true
    }
}

function seleccionar()
{
    $("#nav").removeClass()
    visible = false
}

function Display(input)
{
    dis.value +=input;
}
function calculate()
{
    const dis=document.getElementById('dis');
    dis.value=eval(dis.value);
}
function clear()
{
    dis.value="";
}
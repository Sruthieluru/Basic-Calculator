function display(data)
{
    console.log(data)
    document.getElementById("inp1").value += data
}
function evaluation()
{
    let a=document.getElementById("inp1").value
    console.log(a)
    let b=eval(a)
    console.log(b)
    document.getElementById("inp1").value=b
}
function clear1()
{
    document.getElementById("inp1").value=""
}
function deletion1()
{
    let result=document.getElementById("inp1")
    result.value=result.value.slice(0,-1)
}
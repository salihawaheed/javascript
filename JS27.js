let username = prompt("Enter your name:")
let firstword = username[0]
if((firstword >="A" && firstword <="Z") || (firstword >="a" && firstword <="z"))
{
    console.log("username is valid")
}
else{
    console.log("username is invalid")
}


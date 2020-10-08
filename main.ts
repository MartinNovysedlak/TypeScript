console.log(totalDistance(0.2,0.4,100));
function totalDistance(height, lenght, tower)
{
    let steps : number = tower/height;
    return steps * (lenght + height);
}

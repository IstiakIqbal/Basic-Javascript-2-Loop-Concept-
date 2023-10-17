var numbers = [12, 13, 65, 83, 6, 7, 8, 10, 77, 81, 45, 61, 100];

for(var i = 0; i<numbers.length; i++)
{
    var number = numbers[i];
    if(number>50)
    {
        continue;
    }
    console.log(number);
}
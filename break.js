
/*
for(var i=0; i<100; i++)
{
    console.log(i);
    if(i>5)
    {
        break;
    }
}
*/

var items = ['mouse', 'keyboard', 'pen', 'laptop', 'mobile'];
for(var i=0; i<items.length; i++)
{
    var item = items[i];
    if(item == 'pen')
    {
        break;
    }
    console.log(item);
}
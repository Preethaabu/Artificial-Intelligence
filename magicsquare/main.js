function start(){
    document.getElementById('score').innerHTML="";
    let n=4;

    let one = parseInt(document.getElementById('one').value)
    let two = parseInt(document.getElementById('two').value)
    let three = parseInt(document.getElementById('three').value)
    let four = parseInt(document.getElementById('four').value)
    let five = parseInt(document.getElementById('five').value)
    let six = parseInt(document.getElementById('six').value)
    let seven = parseInt(document.getElementById('seven').value)
    let eight = parseInt(document.getElementById('eight').value)
    let nine = parseInt(document.getElementById('nine').value)
    let ten = parseInt(document.getElementById('ten').value)
    let eleven= parseInt(document.getElementById('eleven').value)
    let twelve = parseInt(document.getElementById('twelve').value)
    let thirteen = parseInt(document.getElementById('thirteen').value)
    let fourteen= parseInt(document.getElementById('fourteen').value)
    let fifteen = parseInt(document.getElementById('fifteen').value)
    let sixteen = parseInt(document.getElementById('sixteen').value)
 
    let vals = [[one,two,three,four],[five,six,seven,eight],[nine,ten,eleven,twelve],[thirteen,fourteen,fifteen,sixteen]];

    //checking row sum
    let sum=34; 
    let currsum=0;
    let flag=1;

    for(let i=0;i<4;i++){
        currsum =0;
        //checking row sum
        for(let j=0;j<n;j++){
            currsum+=vals[i][j];
        }
        if(currsum!=sum){
            flag=0;
            break;
        }

        currsum =0;
        //checking row sum
        if(flag)
        for(let j=0;j<n;j++){
            currsum+=vals[j][i];
        }
        if(currsum!=sum){
            flag=0;
            break;
        }
    }

    //checking diagonals
    if(flag){
        currsum=0;
        let dsum = vals[0][0] + vals[1][1] + vals[2][2] + vals[3][3]; 
        if(dsum!=sum)
            flag=0;

        if(flag)
        {
            dsum = vals[0][3] + vals[1][2] +vals[2][1] + vals[3][0];
            if(dsum!=sum)
            flag=0;
        }
    }

    var h1 = document.createElement('h1');
    h1.setAttribute('id','result')
    if(flag){
        console.log("won");
        h1.setAttribute("class",'won')
        var textNode= document.createTextNode("You Won!!!");
    }else{
            console.log("lost")
            var textNode= document.createTextNode("You Lost!!!");
            h1.setAttribute("class",'lost')
    }
    h1.appendChild(textNode)
    document.getElementById('score').appendChild(h1);

}
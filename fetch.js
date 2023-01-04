
console.log('this is a test area');
// const movie_index=['rednotice','avengers','superman','batman'];
// const arr=[1,2,3,4];

// console.log(arr[2]);
// function toadd(arr,tun){
//  for( var i=0;i<arr.length;i++)
//  {
    //     if(arr[i]=tun)
    //     {
        //         arr[i]=arr[i]+1;
        //     }
        //  }
        // }
        // toadd(arr,3);
        // console.log(arr[2]);

        
        
        
        
        
        // function to create the array 
        var tanu=1;
        var myarray=['Red_Notice',0,'Avengers_1',0,'Superman',0,'Batman',0,'Your_Name',0];
        window.onbeforeunload = function(myarray) {
            for( var i=0;i<myarray.length;i=i+2)
            {
                localStorage.setItem(myarray[i],myarray[i+1])
                console.log("this is for unloading ")
            }
         }
         window.onload = function(myarray) {
            for( var i=0;i<myarray.length;i=i+2)
            {
                localStorage.getItem(myarray[i],myarray[i+1])
                console.log("this is for unloading ")
            }
            
         }
function toadd(myarray,username)
{
    for( var i=0;i<myarray.length;i=i+2)
 {
    if(myarray[i]==username)
    {
        myarray[i+1]=myarray[i+1]+1;
        console.log('this works')
        tanu=tanu+1;
        
    }  
}
}


// let listos=document.getElementById('mylist');
// for(var i=0;i<myarray.length;i=i+2)

// {
    //     let li = document.createElement("a");
    //     a.innerText = myarray[i];
    //     listos.appendChild();
    // }
    
    
    
    
    // function to create anchor tag in javascript 
    var myDiv = document.getElementById("myDiv");
    for(var i=0;i<myarray.length;i=i+2){
        var aTag = document.createElement('a');
        aTag.setAttribute('href',myarray[i]+".html");
        aTag.setAttribute('id','k'+i)//id create kari hai with for loop taaki iterate kar sku 
        
        aTag.innerText = myarray[i]+" "+myarray[i+1];
        myDiv.appendChild(aTag);
    }
    
    
    // aTag.setAttribute('href',myarray[i]+".html");
    // aTag.innerText = myarray[i];
    // myDiv.appendChild(aTag);
    
    
    
    // function to open an html page after submitting data to dearch bar in website 
    var form =document.getElementById("hikol");
    form.addEventListener
    (
        'submit'
        ,
        function(event)
    {
        event.preventDefault()// prevents the form from autosubmitting 
        var username=document.getElementById('queryinput').value; 
        console.log(username);
        toadd(myarray,username);
      if(tanu==1)
    {
        alert('either the name is incorrect or review does not exist');
    }
    else{
           window.open(username+'.html');
           for(var i=0;i<myarray.length;i=i+2)
           {
            var june=document.getElementById('k'+i);
            june.innerText=myarray[i]+" "+myarray[i+1];
            console.log('yipee');
           }


    }
    }
    ) 



function AddNum(){ 
    let a=document.getElementById("firstbox").value
    let b=document.getElementById("secondbox").value
    c=parseInt(a)+parseInt(b)
    let l1=document.getElementById("resultbox")
    l1.innerHTML= "Result: "+c
    
}
function SubNum(){ 
    let a=document.getElementById("firstbox").value
    let b=document.getElementById("secondbox").value
    c=a-b
    let l1=document.getElementById("resultbox")
    l1.innerHTML= "Result: "+c
    
}
function MulNum(){ 
    let a=document.getElementById("firstbox").value
    let b=document.getElementById("secondbox").value
    c=a*b
    let l1=document.getElementById("resultbox")
    l1.innerHTML= "Result: "+c
    
}
function DivNum(){ 
    let a=document.getElementById("firstbox").value
    let b=document.getElementById("secondbox").value
    c=a/b
    let l1=document.getElementById("resultbox")
    l1.innerHTML= "Result: "+c
    
}
function PowNum(){ 
    let a=document.getElementById("firstbox").value
    let b=document.getElementById("secondbox").value
    c=a**b
    let l1=document.getElementById("resultbox")
    l1.innerHTML= "Result: "+c
    
}


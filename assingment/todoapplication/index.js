let a=document.createElement("h2")
a.innerText="Item Name"
a.setAttribute("class","heading1")
let b=document.createElement("input")
b.setAttribute("placeholder","enter item name")
let c=document.createElement("h2")
c.innerText="Quantity"
c.setAttribute("class","heading2")
let d=document.createElement("input")
d.setAttribute("placeholder","enter quantity")
let e=document.createElement("h2")
e.innerText="Quantity"
e.setAttribute("class","heading2")
let g=document.createElement("input")
g.setAttribute("placeholder","enter quantity")
let f=document.querySelector("#container")
let sub=document.createElement("button")
sub.innerText="Submit"
f.append(a,b,c,d,e,g,sub)

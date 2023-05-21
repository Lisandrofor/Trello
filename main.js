const input= document.querySelector("input");
const addbtn= document.querySelector(".btn-add");
const ul= document.querySelector("ul");
const empty= document.querySelector(".empty");
const mostrar=document.querySelector(".btn");
const ul2=document.querySelector(".hist");

const lista=[];
let i;



addbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    
    
        
    
    
            
        const text=input.value;

    
        
        
    
        if (text!==""){
        
        
        li= document.createElement("li");
        p = document.createElement("p");
        
        
        
        
        
        p.textContent = text;    
        lista.push(p.textContent);
        
        
        
        
       
            ul.appendChild(li);
            li.appendChild(p);
            
            
            
            // }  
        
            li.appendChild(addDeleteBtn());
            input.value="";
            empty.style.display="none";
            
        
    
    }}) 
    
    
    
    
    
    


    
 
  
  


   





mostrar.addEventListener("click",(e)=>{
    e.preventDefault();
    cargarhistorial();
        
})



function cargarhistorial(){
    
    const copylista = [].concat(lista); 
  
    
     
    
    for (var i = 0; i < copylista.length; i++) {
        
       const li2=document.createElement("LI");
       const tareas=document.createTextNode(copylista[i]);
       ul2.appendChild(li2);
       li2.appendChild(tareas);
        
}}



function addDeleteBtn() {
    const deletebtn=document.createElement("button");
    deletebtn.textContent="x";
    deletebtn.className="btn-delete"

    deletebtn.addEventListener("click", (e)=>{
        
        const item = e.target.parentElement;
        ul.removeChild(item);
        
        const items=document.querySelectorAll("li");

        if (items.length === 0){

            
            empty.style.display="block";


        } 
    });
    return deletebtn;

}




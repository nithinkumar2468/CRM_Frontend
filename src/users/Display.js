export default function display(){
    var panel=this.nextElementSibling;
    if(panel.style.display==="block")
    {
      panel.style.display="none";
    }
    else{
      panel.style.display="block";
    }
  }
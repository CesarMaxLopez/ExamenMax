function validate()
{
    var x=document.myForm.myInput.value
    if (x >= 1 && x <= 5){
      return true;
    } else 
    {
      if (x < 1) {
        alert("Es menor que 1, debe estar entre 1 y 5");
      }  else 
     if(x > 5){
      alert("No es válido, debe estar entre 1 y 5");
      } else
      return false;
    }
  }
function getInputvalueByID(id) {
  const value = document.getElementById(id).value;
  const convertvalue = parseFloat(value);
  return convertvalue ;
}
function getInnerTextById(id){
  const value=document.getElementById(id).innerText;
  const convertvalue=parseFloat(value);
  return convertvalue;
}

function setInnerTetByIdandValue(id,value){
  document.getElementById(id).innerText=value;
}
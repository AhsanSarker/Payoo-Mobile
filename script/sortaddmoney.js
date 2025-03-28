document
  .getElementById("btnadd-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const Amount = getInputvalueByID("amount");
    const Pin = getInputvalueByID("pin");
    const Accountnumber = document.getElementById("account-number").value;
    const Mainbalance = getInnerTextById("main-balance");
    
    if (Accountnumber .length === 11) {
      if (Pin === 1234) {
        
        const sum =  Mainbalance + Amount;
      
        // document.getElementById("main-balance").innerText = sum; //sum taka add korlam
        
        setInnerTetByIdandValue("main-balance",sum)
      } else {
        // console.log('pin thik nai')
        alert("pin thik nai");
      }
    } else {
      // console.log('need valid account number')
      alert("need valid account number");
    }
  });

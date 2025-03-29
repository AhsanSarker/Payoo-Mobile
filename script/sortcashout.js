document
  .getElementById("btncashout-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountnumber = document.getElementById("accountnumber").value;
    const Amount = getInputvalueByID("cashoutamount");
    const Pin = getInputvalueByID("cashoutpin");
    const Mainbalance = getInnerTextById("main-balance");
// if(accountnumber.length===11){
//   console.log('right')
// }
// else{
//   alert('wrong')
// }

    if (accountnumber.length===11) {
      if (Pin === 1234) {
        const sum = Mainbalance - Amount;

        // document.getElementById("main-balance").innerText = sum; //sum taka add korlam

        setInnerTetByIdandValue("main-balance", sum);
      } else {
        // console.log('pin thik nai')
        alert("pin thik nai");
      }
    } else {
      // console.log('need valid account number')
      alert("need valid account number");
    }
  });

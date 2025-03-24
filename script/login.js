// alert()

document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const AccountNumber = document.getElementById("account-number").value;

    const Pin = document.getElementById("pin").value;
    const convertpin=parseInt(Pin)

    if (AccountNumber.length === 11) {
      if (convertpin===1234) {
        window.location.href="./main.html"
      }
      else{
    // console.log('pin thik nai')
    alert('pin thik nai')
      }
    }
    else{
        // console.log('need valid account number')
        alert('need valid account number')
    }
  });

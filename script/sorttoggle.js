document.getElementById("cashout").style.display = "none";


document.getElementById("add-moneybox").addEventListener("click", function () {

  handtoggle("addmoney", "block");
  handtoggle("cashout", "none");

  // document.getElementById('cashout').style.display="none";
  // document.getElementById('addmoney').style.display="block";
});
document.getElementById("cash-outbox").addEventListener("click", function () {

    handtoggle("addmoney", "none");
    handtoggle("cashout", "block");
  
    // document.getElementById('cashout').style.display="block";
    // document.getElementById('addmoney').style.display="none";
  });
  

function handtoggle(id, status) {
  document.getElementById(id).style.display = status;
}

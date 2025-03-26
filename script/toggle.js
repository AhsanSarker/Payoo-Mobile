document.getElementById('cashout').style.display="none";

document.getElementById('add-moneybox').addEventListener('click',function(){
    document.getElementById('cashout').style.display="none";
    document.getElementById('addmoney').style.display="block";
})
document.getElementById('cash-outbox').addEventListener('click',function(){
    document.getElementById('cashout').style.display="block";
    document.getElementById('addmoney').style.display="none";
})

let ul = document.getElementById("lista-movimientos");
let li = document.createElement("li");
li.appendChild(document.createTextNode("Deposito - $50000"))
li.classList.add('list-group-item');
ul.prepend(li);

console.log(ul);



/*
let withdraw = {
    currency: origin,
    startBalance: balanceOrigin,
    amount: -amount,
    date: new Date().toLocaleString(),
    finalBalance: balanceOrigin - amount,
    operation: 'transfer'
};

originHistory.push(withdraw);
localStorage.setItem(`depositHistory-${origin}`, JSON.stringify(originHistory));*/
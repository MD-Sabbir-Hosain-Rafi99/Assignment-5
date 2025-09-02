let hearts = document.querySelectorAll(".fa-heart");
let heartCount = document.getElementById("heartCount");

hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        let heartCountConvert = parseInt(heartCount.innerText);
        heartCountConvert++;
        heartCount.innerHTML = heartCountConvert
    })
});

let btnfirsts = document.querySelectorAll(".btnfirst");
let copyValue = document.getElementById("copyValue");
let copyBtns = document.querySelectorAll('.btnfirst');

btnfirsts.forEach(btnfirst => {
    btnfirst.addEventListener('click', () => {
        let btnfirstsConvert = parseInt(copyValue.innerText);
        btnfirstsConvert++;
        copyValue.innerHTML = btnfirstsConvert
        let card = btnfirst.closest('.card');
        let title = card.querySelector('.card-title2').innerText;
        navigator.clipboard.writeText(title).then(() => {
            alert(`Copied: ${title}`);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    })
});


let btns = document.querySelectorAll('.btn');
let coin = document.getElementById('coin');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let card = btn.closest('.card');
        let title = card.querySelector('.nationalEmergency').innerText;
        let title2 = card.querySelector('.card-title2').innerText;
        let coinConvert = parseInt(coin.innerHTML);
        let substract = coinConvert - 20;

        if (substract < 0) {
            alert("Coin nai");
        } else {
            alert(`📞 Calling ${title} ${title2}`);
            coin.innerHTML = substract;

            let rightsideCards = document.querySelector(".rightsideCards");

            let newDiv = document.createElement('div');
            newDiv.style.display = "flex"
            newDiv.style.alignItems = "center"
            newDiv.style.justifyContent = "space-between"
            newDiv.style.backgroundColor = "lightgray";
            newDiv.style.padding = "10px";
            newDiv.style.margin = "5px 15px";
            newDiv.style.borderRadius = "8px";
            newDiv.style.fontWeight = "bold";

            let textDiv = document.createElement('div');
            textDiv.innerText = title + "\n" + title2;

            let timeDiv = document.createElement('div');
            timeDiv.style.color = "black";
            timeDiv.style.marginTop = "5px";

            function updateTime() {
                let now = new Date();
                let hours = now.getHours().toString().padStart(2, '0');
                let minutes = now.getMinutes().toString().padStart(2, '0');
                let seconds = now.getSeconds().toString().padStart(2, '0');
                timeDiv.innerText = `${hours}:${minutes}:${seconds}`;
            }
            updateTime();

            newDiv.appendChild(textDiv);
            newDiv.appendChild(timeDiv);
            rightsideCards.appendChild(newDiv);
            let btnClear = document.querySelector(".btnClear");
            btnClear.addEventListener("click", () => {
                newDiv.innerHTML = ''
                newDiv.style.backgroundColor = "";
                newDiv.style.padding = "";
                newDiv.style.margin = "";
                newDiv.style.borderRadius = "";
                newDiv.style.fontWeight = "";
            })
        }
    })
});

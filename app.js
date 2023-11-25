let turn = "X"
let turnmp3 = new Audio('ting.mp3')
let winmp3 = new Audio('win.mp3')
let clickmp3 = new Audio('click.mp3')
let isgameover = false
const changeturn = () =>
{
    if (turn == "X")
    {
        turn = "O"
    } else
    {
        turn = "X"
    }
}

const checkwin = () =>
{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2],
    ]
    wins.forEach(e =>
    {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== ""))
        {
            document.querySelector('.info').innerHTML = boxtext[e[0]].innerText + ' win'
            winmp3.play()
            isgameover = true

        }
    })
}


let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>
{
    let value = element.querySelector('.boxtext')
    element.addEventListener('click', () =>
    {
        if (value.innerText === "")
        {
            value.innerText = turn
            changeturn()
            turnmp3.play()
            checkwin()
            if (!isgameover)
            {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }

        }
    })
})

btn.addEventListener('click', () =>
{
    let value = document.querySelectorAll('.boxtext')
    clickmp3.play()
    Array.from(value).forEach(element =>
    {
        element.innerText = ""
    })
    turn = "X"
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})

const bar = document.getElementById("line")
const con = document.querySelector(".main")
const btn2 = document.querySelector('#btn2')

btn2.addEventListener("click", () =>
{
    let num = 0
    let numraise = setInterval(() =>
    {
        if (num >= 100)
        {
            clearInterval(numraise)
            //Progess bar = 100 then the container will be disappiered
            con.style.display = "none"
        }
        else
        {
            num++
            bar.style.width = num + "%"
        }
    }, 100)
})
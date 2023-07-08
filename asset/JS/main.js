let _cvv = document.getElementsByClassName('cvv')[0]
let _card = document.getElementById('card')
let _back = document.getElementsByClassName('back')[0]
let _backForward = document.querySelectorAll('.backForward')
let _txtCvv = document.getElementsByClassName('txtCvv')[0]
let _numberCard = document.getElementsByClassName('numberCard')[0]
let _txtHolder = document.getElementsByClassName('txtHolder')[0]
let _txtMonth = document.getElementsByClassName('txtMonth')[0]
let _txtyear = document.getElementsByClassName('txtyear')[0]

// Rotate Y Card
let _imgs = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jepeg', '5.jpeg', '6.jpeg']

function _onload() {
    let _random = Math.floor(Math.random() * _imgs.length)
    console.log(_random);
    // let _pic = _imgs[_random]
    // console.log(_pic);
    _card.style.backgroundImage =
        'url(../../asset/CSS/img/bg/' + _random + '.jpeg)'
    _back.style.backgroundImage =
        'url(../../asset/CSS/img/bg/' + _random + '.jpeg)'

} _onload()

// document.getElementsByClassName('card')[0].setAttribute('background-image', `url(./img/bg/${_teeet}.jpeg`)
// let test1 =  document.getElementsByClassName('card')[0].setAttribute('fontSize', '200px')
//   console.log(_card.style);
//   let test =  document.getElementsByClassName('card')[0].getAttribute('background-image')
//     console.log(test);



_cvv.addEventListener('click', () => {
    _card.classList.add('trans')
    _back.style.opacity = '1'

    _cvv.addEventListener('input', () => {
        let temp = _cvv.value
        //    _txtCvv.setAttribute('type', password)
        _txtCvv.innerText = temp

    })
})

// Rotate Y Back Card
_backForward.forEach((val, i) => {
    val.addEventListener('click', (e) => {
        _card.classList.remove('trans')
        _back.style.opacity = '0'
        console.log(this.length);

        if (i == 0) {
            // _numberCard.style.border = '2px solid gray'
            _numberCard.style.background = 'gray'
            // if(this.length != 0){
            val.addEventListener('input', () => {
                if (val.value.length == 4 || val.value.length == 9 || val.value.length == 14 || val.value.length == 19) {
                    val.value += ' '
                    _numberCard.innerText = val.value

                }
            })
            // }
        }

        if (i == 1) {
            _txtHolder.style.background = 'gray'

            val.addEventListener('input', () => {
                _txtHolder.innerText = val.value
            })
        }
        if (i == 2) {

            val.addEventListener('input', () => {
                console.log(val);
                _txtMonth.innerText = val.value
            })
        }
        if (i == 3) {

            val.addEventListener('input', () => {
                console.log(val);
                _txtyear.innerText = val.value
            })
        }

    })
})





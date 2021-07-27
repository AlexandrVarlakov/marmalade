class message extends EventTarget{
    constructor(_type, _title ='Alert', _text = 'This alert message!', _btnText = 'Ooops', _time = 5000) {
        super();

        this.title = _title;
        this.text = _text;
        this.btnText = _btnText;
        this.type = _type;
        this.container = this.createElement('div', 'message');
        this.container.classList.add(this.type);
        this.container.append(this.createClosePanel());
        this.container.append(this.createBodyMessage(this.title, this.text, this.btnText));
        this.container.append(this.createIndicator());
        

        document.body.append(this.container);

        let step = 10;
        let end = _time;
        let count = 0;
        let indInner = this.container.querySelector('.message__ind-inner');
        this.animation_test = 0;

        let self = this;
        this.container.onanimationend = function(){
            self.animation_test++;

            if (self.animation_test > 1) self.container.remove();
        }


        let i = setInterval( ()=>{
            count += step;
            let percent = (count / end)*100;
            
            if ( count >= end ){
                this.container.classList.add('fadeOutAnimation');
                
                clearInterval(i);
            } else {
                indInner.style.width = percent + '%';
            }
        }, 10);

    }


    createElement(el, cl){
        let element = document.createElement(el);
        element.classList.add(cl);
        return element;
    }

    createClosePanel(){
        let panel = this.createElement('div', 'message__close-panel');
        let closeBtn = this.createElement('div', 'message__close');
        let clLine_1 = this.createElement('div', 'message__close-line');
        let clLine_2 = this.createElement('div', 'message__close-line');

        closeBtn.append(clLine_1);
        closeBtn.append(clLine_2);

        closeBtn.onClick = function(){
            this.container.classList.add('fadeOutMassage');
            alert('');
        }
        let self = this;
        closeBtn.onclick = function(){
            self.container.classList.add('fadeOutAnimation');
        }
        panel.append(closeBtn);
        return panel;

    }

    createBodyMessage(title, text, btnText){

        let bodyMsg = this.createElement('div', 'message__body');
        let bodyInnerMsg = this.createElement('div', 'message__body-inner');
        let titleMsg = this.createElement('p', 'message__title');
        titleMsg.innerHTML = title;

        let textMsg = this.createElement('p', 'message__text');
        textMsg.innerHTML = text;

        let btnContainer = this.createElement('div', 'message__btn-container');
        let btn = this.createElement('button', 'message__btn');
        btn.innerHTML = btnText;

        let self = this;
        btn.onclick = function(){
            self.container.classList.add('fadeOutAnimation');
        }


        btnContainer.append(btn);
        bodyInnerMsg.append(titleMsg);
        bodyInnerMsg.append(textMsg);

        bodyMsg.append(bodyInnerMsg);
        bodyMsg.append(btnContainer);

        return bodyMsg;
    }

    createIndicator(){
        let ind = this.createElement('div', 'message__ind-container');
        let indInner = this.createElement('div', 'message__ind-inner');
        ind.append(indInner);
        return ind;
    }

}


$('#md-err').on('click', function(){
    let msg = new message('err-msg', 'Ошибка', 'Что-то привело к ошибке!', 'Понятно', 500000);
})

$('#md-scs').on('click', function(){
    let msg = new message('success-msg', 'Отлично', 'Все прошло отлично!', 'Отлично', 500000);
})
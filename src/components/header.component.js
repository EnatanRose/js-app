import {Component} from '../core/component'

export class HeaderComponent extends Component {
    constructor(id){
        super(id)
    }

    init() {
       const btn = this.$el.querySelector('.js-header-start')
       console.log(btn)
       btn.addEventListener('click', buttonHandler.bind(this))
    }
}

function buttonHandler(){
    console.log(this.$el)
    this.$el.classList.toggle('hide')
}
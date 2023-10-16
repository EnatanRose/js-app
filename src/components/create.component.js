import {Component} from '../core/component'
import {Form} from '../core/form'

export class CreateComponent extends Component{
    constructor(id){
        super(id)
    }
    init(){
        this.$el.addEventListener('submit', this.submitHandler.bind(this))
        this.form = new Form(this.$el,{
            title: [],
            fulltext: []
        })
    }
    submitHandler(event){
        event.preventDefault()
        const formData = {
            type: this.$el.type.value,
            ...this.form.value()
        }
        console.log(formData, this.form.value())
    }
}
export class Form {
    constructor(form, controls){
        this.form = form
        this.controls = controls
    }

    value() {
        const value = {}
        Object.keys(this.controls).forEach(control => {
           value[control] = this.form[control].value
        })
        return value
    }
    clear() {
        Object.keys(this.controls).forEach(control => {
            this.form[control].value = ''
        })
    }

    isValid(){
        let isFormValid = true
        Object.keys(this.controls).forEach(control =>{
            const validators = this.controls[control]
            let isValid = true
            validators.forEach(validator =>{
                isValid = validator(this.form[control].value) && isValid
            })
            isValid ? clearError(this.form[control]): setError(this.form[control])
            isFormValid = isFormValid && isValid
        })
        return isFormValid
    }
}

function setError($control){
  clearError($control)
  console.log($control)
  const error = '<p class="validation-error">Введите корректное значение</p>'
  $control.classList.add('invalid')
  $control.insertAdjacentHTML('afterend',error)
}

function clearError($control){
    $control.classList.remove('invalid');

    let sibling = $control.nextSibling;
    if (sibling && sibling.parentNode === $control.closest('.form-control')) {
        $control.closest('.form-control').removeChild(sibling);
    }
}
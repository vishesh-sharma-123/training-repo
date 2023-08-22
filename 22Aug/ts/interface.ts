interface Validator{
    isValid(value: string| number);
}

interface ValidatorMessage{
    setMessage(message: string);
}



class EmailValidator implements Validator {

    setMessage(message: string){
        console.log("other interface implementation")
    }


    isValid(value: string | number) {
        console.log("some validator logic")
    }
}
function insert(num){
    document.form.textview.value=
     document.form.textview.value+num;
}

function clean(){
    document.form.textview.value=""
}

function back(){
    const deleteBack=document.form.textview.value;
    document.form.textview.value=deleteBack.substring(0,deleteBack.length-1)
}

function equal(){
    const result=document.form.textview.value;
    if(result){
        document.form.textview.value=eval(result);
    }
    else{
        alert('Введите значение')
    }
}
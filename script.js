let string = "";
let buttons = document.querySelectorAll('.button')

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == '=') {
            string=eval(string)
            document.querySelector('input').value = string
        }
        else if (e.target.innerHTML == 'AC') {
            string = ""
            document.querySelector('input').value = string
        }
        // else if (e.target.innerHTML == 'C') {
            // document.getElementsByClassName("b").addEventListener('click', (e)=>{
            //     var value = document.getElementById('input').value;
            //     document.getElementById('input').value = value.substring(0,value.length - 1);
            //     // document.querySelector('input').value = string.substring(0,value.length - 1);
            //     document.querySelector('input').value = string
            // })
                
        
        // }
        else{
            // console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string
        }
    })
})
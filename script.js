
    var tablinks = document.getElementsByClassName("tab_links");
    var tabcontents = document.getElementsByClassName("tab_contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active_links")
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active_tab")
        }
        event.currentTarget.classList.add("active_links") ;
        document.getElementById(tabname).classList.add("active_tab");
    }


    const scriptURL = 'https://script.google.com/macros/s/AKfycbwW1UsX18QU-QeHDzTQYi6tyybgrHFtEIU-lXt3viJk4Y3E7Pw8z2BJab1UekrSBrKU/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
         msg.innerHTML = "Message Sent successfully"
            form.reset()
            
            setTimeout(function(){
                msg.innerHTML = ""
            },5000);
        })
        .catch(error => console.error('Error!', error.message))
    })

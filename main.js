console.log('It works')

$(document).ready(function(){
    $('.submit').click(function(event){
        console.log('Clicked')


        var fName = $('.fName').val()
        var lName = $('.lName').val()
        var pNumber = $('.pNumber').val()
        var email = $('.email').val()
        var message = $('.message').val()

        var statusElm = $('.status')
        statusElm.empty()

        if (fName.length > 2) {
            statusElm.append('<div>First name is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>First name is invalid</div>')

        }

        if (pNumber.length == 11) {
            statusElm.append('<div>Phone number is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Phone number is invalid</div>')
        }

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>')
            
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is invalid</div>')
        }

        if(message.length > 15) {
            statusElm.append('<div>Message is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Message is invalid</div>')
        }

    })
})
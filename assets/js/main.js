const a = document.getElementsByClassName('header')[0]
a.addEventListener('click', function(e) {
    fetch('https://boost-center.com').then(res => {
        console.log(res)
    })
})
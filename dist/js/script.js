const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu');


hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

function copyToClipboard() {
    var copyText = document.getElementById("copy")

    copyText.select()
    copyText.setSelectionRange(0, 99999)

    navigator.clipboard.writeText(copyText.value)
    alert("Copied the text: " + copyText.value)
}

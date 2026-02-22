const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const navLinks = menu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbwJ88JIfL-OzYCYBdIoEUEJT8U-rXWfTD83q7iKVPa5hHLPJFhEmB90elQ0Yln16D0r/exec'
const form = document.forms['DataSheet']
const btnSend = document.querySelector('.btn_send')

	form.addEventListener('submit', e => {
		e.preventDefault()

        btnSend.disabled = true;
        btnSend.textContent = 'Sending...';
		fetch(scriptURL, { method: 'POST', body: new FormData(form) })
			.then(response => response.json())
			.then(response => {console.log('Success!', response)
                btnSend.textContent = 'DONE'
                btnSend.disabled = false

                setTimeout(() => {
                    btnSend.textContent = 'Send Message';
                    btnSend.disabled = false;
                    btnSend.style.backgroundColor = '#10365e'; 
                }, 3000);

    })
			.catch(error => {console.error('Error!', error.message)

                btnSend.textContent = 'FAILED'
                btnSend.disabled = false
                btnSend.style.backgroundColor = '#550b23';

                setTimeout(() => {
                    btnSend.textContent = 'Send Message';
                    btnSend.disabled = false;
                    btnSend.style.backgroundColor = ''
                }, 3000);
            })
	})
function doPost(e) {
  return ContentService
    .createTextOutput(JSON.stringify({status:"ok"}))
    .setMimeType(ContentService.MimeType.JSON);
}
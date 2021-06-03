console.log('Public index v dele')

const loginForm = document.querySelector('#loginForm')


if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const response = await fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    console.log(response)
    if (response.redirected) {
      window.location = response.url
    }
  })
}

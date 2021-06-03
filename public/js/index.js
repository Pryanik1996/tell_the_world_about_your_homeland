const $conteiner = document.querySelector('.conteiner')
// console.log($conteiner)

$conteiner.addEventListener('submit', async (event) => {
  console.log(event.target)

  event.preventDefault()
  const formData = Object.fromEntries(new FormData(event.target))
  const response = await fetch('/register', { // отпр с фронта
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
  if(response.redirected) {
    window.location = response.url
  }
})

const serializers = require('../../serializers')

const api = {
  greeter: serializers.Greeter.create((method, data, callback) => {
    if (method.name !== 'SayHello') {
      return callback('Unsupported method')
    }

    return fetch('http://localhost:8000/greeter/SayHello', { method: 'POST', body: data })
      .then((response) => response.arrayBuffer())
      .then((buffer) => new Uint8Array(buffer))
      .then((unit8Array) => serializers.HelloReply.decode(unit8Array))
      .then((data) => callback(null, data))
      .catch((e) => callback(e))
  }),
}

;(() => {
  const refs = {
    message: document.getElementById('message'),
    form: document.getElementById('nameForm'),
  }

  const render = (message, resetForm = false) => {
    refs.message.innerText = message
    refs.message.style.display = 'block'

    if (resetForm) {
      refs.form.reset()
    }
  }

  const handleFormSubmit = ({ name }) => {
    api.greeter
      .sayHello({ name })
      .then((r) => render(r.message, true))
      .catch(() => render('Error!'))
  }

  refs.form.addEventListener('submit', (e) => {
    e.preventDefault()
    new FormData(refs.form)
  })

  refs.form.addEventListener('formdata', (e) => {
    const { name } = [...e.formData.entries()].reduce(
      (prev, [key, value]) => {
        return { ...prev, [key]: value }
      },
      { name: 'Default name' }
    )

    return handleFormSubmit({ name })
  })
})()

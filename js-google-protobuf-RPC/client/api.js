const Greeter = require('../proto/greeter_grpc_web_pb')

const PORT = 8080

const greeterService = new Greeter.GreeterClient(`http://localhost:${PORT}`)

;(() => {
  const refs = {
    message: document.getElementById('message'),
    form: document.getElementById('nameForm'),
  }

  const render = (message, resetForm = false) => {
    refs.message.innerHTML = message
    refs.message.style.display = 'block'


    if (resetForm) {
      refs.form.reset()
    }
  }

  const handleFormSubmit = ({ name }) => {
    const helloRequest = new proto.greeter.HelloRequest()
    helloRequest.setName(name)

    greeterService.sayHello(helloRequest, {}, function (err, response) {
      if (err) {
        return render('Error!')
      }
      
      return render(response.getMessage(), true)
    })
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

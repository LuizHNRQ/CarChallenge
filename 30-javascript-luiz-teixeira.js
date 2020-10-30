;(($) => {
  'use strict'

  const app = (() => {
    return {
      init: function () {
        this.handleRequest()
        this.initEvents()
      },
      initEvents: function () {
        const $form = document.querySelector('.form')
        $form.addEventListener('submit', this.handleSubmit)
      },
      handleSubmit: function (e) {
        e.preventDefault()
        const $tableCar = document.querySelector('#table-car')
        $tableCar.appendChild(app.createNewCar())
      },

      createNewCar: function () {
        const $fragment = document.createDocumentFragment()

        const $image = document.createElement('img')
        const $tdModel = document.createElement('td')
        const $tdYear = document.createElement('td')
        const $tdLicense = document.createElement('td')
        const $tdColor = document.createElement('td')
        let $tr = document.createElement('tr')
        let $tdImage = document.createElement('td')
        let $delete = document.createElement('button')

        $image.src = document.querySelector('#image').value
        $tdModel.textContent = document.querySelector('#model').value
        $tdYear.textContent = document.querySelector('#year').value
        $tdLicense.textContent = document.querySelector('#license').value
        $tdColor.textContent = document.querySelector('#color').value

        //button delete funcionalities
        $delete.innerHTML = 'excluir'
        $delete.addEventListener('click', (e) => {
          let elementsLine = e.target.parentNode
          e.preventDefault()
          elementsLine.parentElement.removeChild(elementsLine)
        })

        const args = [
          $tdImage,
          $tdModel,
          $tdYear,
          $tdLicense,
          $tdColor,
          $delete,
        ]

        $tdImage.append($image)
        $tr.append(...args)

        return $fragment.appendChild($tr)
      },
      append: function (element) {
        return appendChild(element)
      },
      handleRequest: function () {
        fetch('./company.json').then((res) => {
          res.json().then((data) => {
            const $companyName = $('[id=name]').get()
            const $companyPhone = $('[id=contact]').get()

            $companyName.textContent = data.name
            $companyPhone.textContent = data.phone
          })
        })
      },
    }
  })()

  app.init()
})(window.DOM)

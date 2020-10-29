;(($) => {
  'use strict'

  const app = (() => {
    return {
      init: function () {
        this.companyInfo()
        this.initEvents()
      },
      initEvents: function () {
        const $form = $('[class="form"]')
        $form.on('submit', this.handleSubmit)
      },
      handleSubmit: function handleSubmit(e) {
        e.preventDefault()
        const $tableCar = $('[id=table-car]').get()
        $tableCar.appendChild(app.createNewCar())
      },
      createNewCar: function () {
        const $fragment = document.createDocumentFragment()

        let $tr = this.create('tr')
        const $image = this.create('img')
        let $tdImage = this.create()
        const $tdModel = this.create()
        const $tdYear = this.create()
        const $tdLicense = this.create()
        const $tdColor = this.create()

        $image.setAttribute('src', $('[id="image"]').get().value)
        $tdImage.appendChild($image)

        $tdModel.textContent = $('[id="model"]').get().value
        $tdYear.textContent = $('[id="year"]').get().value
        $tdLicense.textContent = $('[id="license"]').get().value
        $tdColor.textContent = $('[id="color"]').get().value

        const args = [$tdImage, $tdModel, $tdYear, $tdLicense, $tdColor]
        $tr.append(...args)

        return $fragment.appendChild($tr)
      },
      append: function (element) {
        return appendChild(element)
      },
      create: function (type) {
        return !type
          ? document.createElement('td')
          : document.createElement(type)
      },
      companyInfo: function () {
        fetch('./company.json').then((res) => {
          res.json().then((data) => {
            const $companyName = $('[id=name]').get()
            const $companyPhone = $('[id=contact]').get()

            $companyName.textContent = data.name
            $companyPhone.textContent = data.phone
          })
        })
      },

      createComponents: function () {},
    }
  })()

  app.init()
})(window.DOM)

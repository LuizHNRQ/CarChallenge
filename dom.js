;(() => {
  'use strict'

  function DOM(elements) {
    if (!(this instanceof DOM)) {
      return new DOM(elements)
    }
    this.element = document.querySelectorAll(elements)

    // if (this.element.length === 1) {
    //   return this.get()
    // }
  }

  DOM.prototype.on = function (eventType, callback) {
    Array.prototype.forEach.call(this.element, (element) => {
      element.addEventListener(eventType, callback, false)
    })
  }
  DOM.prototype.off = function off(eventType, callback) {
    Array.prototype.forEach.call(this.element, (element) => {
      element.removeEventListener(eventType, callback, false)
    })
  }
  DOM.prototype.get = function get(index) {
    return !index ? this.element[0] : this.element[index]
  }

  // forEach, map, filter, reduce, reduceRight, every e some.

  DOM.prototype.forEach = function () {
    return Array.prototype.forEach.apply(this.element, arguments)
  }
  DOM.prototype.map = function () {
    return Array.prototype.map.apply(this.element, arguments)
  }
  DOM.prototype.filter = function () {
    return Array.prototype.filter.apply(this.element, arguments)
  }
  DOM.prototype.reduce = function () {
    return Array.prototype.reduce.apply(this.element, arguments)
  }
  DOM.prototype.reduceRight = function () {
    return Array.prototype.reduceRight.apply(this.element, arguments)
  }
  DOM.prototype.every = function () {
    return Array.prototype.every.apply(this.element, arguments)
  }
  DOM.prototype.sum = function () {
    return Array.prototype.sum.apply(this.element, arguments)
  }

  //isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.

  DOM.isArray = function (parameters) {
    return Object.prototype.toString.call(parameters) === '[object Array]'
  }
  DOM.isObject = function (parameters) {
    return Object.prototype.toString.call(parameters) === '[object Object]'
  }
  DOM.isFunction = function (parameters) {
    return Object.prototype.toString.call(parameters) === '[object Function]'
  }
  DOM.isNumber = function (parameters) {
    return Object.prototype.toString.call(parameters) === '[object Number]'
  }
  DOM.isString = function (parameters) {
    return Object.prototype.toString.call(parameters) === '[object String]'
  }
  DOM.isBoolean = function (parameters) {
    return Object.prototype.toString.call(parameters) === '[object Boolean]'
  }
  DOM.isNull = function (parameters) {
    return (
      Object.prototype.toString.call(parameters) === '[object Null]' ||
      Object.prototype.toString.call(parameters) === '[object Undefined]'
    )
  }

  window.DOM = DOM
})()

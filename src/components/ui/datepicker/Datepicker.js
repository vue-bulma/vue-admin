import { init as Flatpickr } from 'flatpickr'

function Datepicker (selector, config, l10n) {
  this.l10n = Object.assign({}, Flatpickr.prototype.l10n, l10n)
  return Flatpickr.call(this, selector, config)
}

Datepicker.prototype = Flatpickr.prototype

export default Datepicker

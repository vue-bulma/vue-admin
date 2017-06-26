import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
})

Vue.filter('changeIconType', function (value) {
  console.log(value)
  switch (value) {
    case 0:
      return 'fa fa-heartbeat'
  }
})

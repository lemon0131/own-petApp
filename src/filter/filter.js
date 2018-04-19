import Vue from 'vue';
import moment from 'moment'

Vue.filter('dataString',(value,format='h:mm:ss')=>{
  moment(value).format(format)
});

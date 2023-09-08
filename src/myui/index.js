import myButton from './mybutton.vue';
import myHeader from './myheader.vue';
import configProvider from './configProvider.vue';

const com = {
  myButton,
  myHeader,
  configProvider,
}

export default {
  /**
   * @param {{ component: (arg0: string, arg1: any) => void; }} Vue
   */
  install(Vue) {
    for (const key in com) {
      console.log(key, com[key]);
      Vue.component(key, com[key])
    }
  }
}
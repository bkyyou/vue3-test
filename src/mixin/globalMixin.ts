import { ref, onMounted } from 'vue';

export const popState = ref(false);

export const popClose = () => {
  popState.value = !popState.value
}

export const globalMixin = () => {
  onMounted(() => {
    console.log('请求了')
  })
}
<script setup>
import {
  reactive,
  ref,
  onMounted,
  onUpdated,
  watch,
  watchEffect,
  computed,
  defineProps,
  defineEmits,
  provide,
} from 'vue';
import Test1 from './Test1.vue';
import Test2 from './Test2.vue';
import Test3 from './Test3.tsx';
import PointDiv from "@/components/PointDiv.vue";
import FnPointDiv from "@/components/FnPointDiv/Index.tsx";
import { popState, popClose, globalMixin } from '@/mixin/globalMixin'

const flag = ref(false);
const test1Dom = ref(null);

const changeFlag = () => {
  flag.value = !flag.value;
}

globalMixin()
onMounted(() => {
  console.log(test1Dom.value)
})

</script>

<style scoped>

</style>
<template>
  <div>
    <div @click="changeFlag">更改展示</div>

    <keep-alive>
      <Test1 ref="test1Dom" v-if="flag"/>
      <Test2 v-else />
    </keep-alive>

    <div v-if="popState">弹窗</div>
    <button @click="popClose">展示|隐藏</button>

  <PointDiv>
    <template #one>one</template>
    <!-- <template #two>two</template> -->
  </PointDiv>

  <FnPointDiv>
    one
  </FnPointDiv>

  <!-- <div>test3</div>
  <Test3></Test3> -->
  </div>
</template>
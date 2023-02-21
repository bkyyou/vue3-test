import { ref, reactive, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const num1 = ref(0);
    const obj = reactive({ a: 1 });

    setTimeout(() => {
      num1.value = 99;
      obj.a = 100;
    }, 1000);

    const add = () => {
      obj.a = obj.a + 1;
    };

    return {
      num1,
      obj,
      add,
    };
  },
});

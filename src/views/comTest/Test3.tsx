import { ref, reactive, defineComponent } from "vue";

export default defineComponent({
  props: {
    toTsxSon: String,
  },
  setup(props, context) {
    const num1 = ref(0);
    const obj = reactive({ a: 1 });

    setTimeout(() => {
      num1.value = 99;
      obj.a = 100;
    }, 1000);

    const add = () => {
      obj.a = obj.a + 1;
    };

    return function () {
      return <div>
        {/* <div>{num1.value}</div>
        <div>{obj.a}</div>
        <button onClick={add}>+1</button> */}

        <div>{ props.toTsxSon }</div>
        <button onClick={() => { context.emit('parentMethod', 3333) }}>向父组件传参</button>
      </div>
    };
    // return (
    //   <div>
    //     <div>{num1.value}</div>
    //     <div>{obj.a}</div>
    //     <button onClick={add}>+1</button>
    //   </div>
    // );
  },
});

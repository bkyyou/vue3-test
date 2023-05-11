import { ref, reactive, defineComponent } from "vue";

// https://juejin.cn/post/7114063575122984973

// child.tsx
// import { defineComponent } from 'vue'
// export default defineComponent({
//   setup(props, { slots }) { // 逻辑
//     return () => (
//       <div>
//         <p>这里是插槽</p>
//         <p>这个是默认插槽内容：{slots.default?.()}</p>
//         <p>这个是具名插槽内容：{slots.mySlot?.()}</p>
//         <p>这个是作用域插槽：{slots.main?.({row:'我才是最主要的'})}</p>
//       </div>
//     )
//   },
// })
// export default defineComponent({
//   components:{ Child },
//   setup() {
//     return () => {
//       <Child v-slots={{
//           default:()=>'默认插槽内容',
//           mySlot:()=>'有名插槽',
//           main:(props:Record<'row',string>)=>props.row
//         }}></Child >
//     }
//   }
// })
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

// 8. 事件修饰符
// jsx中给事件增加修饰符需要借助withModifiers方法。

// import { withModifiers, defineComponent, ref } from 'vue'

// const App = defineComponent({
//   setup() {
//     const count = ref(0);

//     const inc = () => {
//       count.value++;
//     };

//     return () => (
//       <div onClick={ withModifiers(inc, ['self']) }>{ count.value }</div>
//     );
//   },
// })
// 注意：Vue模板中ref变量是可以直接解构的，但是在jsx中不行，需要记得添加.value，比如上面的{ count.value }。

// 9. v-model 双向绑定
// 绑定 modelValue

// <el-input v-model={ name.value }></el-inpu>
// 绑定自定义名称
// 比如绑定visible，JSX中不能直接用v-model:visible的语法，需要传入一个数组[menuShow.value, 'visible']，数组的第二个参数就是要绑定的自定义名称。

// <d-flexible-overlay v-model={[menuShow.value, 'visible']}></d-flexible-overlay>

// 作者：没名字的某某人
// 链接：https://www.jianshu.com/p/544f12d56966
// 来源：简书
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

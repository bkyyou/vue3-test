import { ref, reactive } from "vue";

function Test3() {
  const num1 = ref(0);
  const obj = reactive({ a: 1 });

  setTimeout(() => {
    num1.value = 99;
    obj.a = 100;
    console.log('2222')
  }, 1000);

  const add = () => {
    console.log(111)
    obj.a = obj.a + 1;
  };
  return (
    <div>
      <div>{num1.value}</div>
      <div>{obj.a}</div>
      <button onClick={add}>+1</button>
    </div>
  );
};

export default Test3;

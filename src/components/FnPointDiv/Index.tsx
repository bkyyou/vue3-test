import { ref } from "vue";
import "./index.css";

type PropsType = {
  slotCom: {
    one: JSX.Element;
    two: JSX.Element;
  };
};

// const FnPointDiv = (props: PropsType) => {
//   // const {
//   //   slotCom: { one, two },
//   // } = props;

//   console.log('----', props)
//   return (
//     <div class="pointDiv">
//      22222
//     </div>
//   );
// };

const FnPointDiv = (slot: { one?: JSX.Element; two?: JSX.Element }) => {

  function move(event: any) {
    console.log(event.clientX)
  }

  return (
    <div class="pointDiv" onMousemove={move}>
      {slot?.one}
      {slot?.two}
    </div>
  );
};

export default FnPointDiv;

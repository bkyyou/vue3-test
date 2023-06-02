import { Container, Draggable } from "vue-smooth-dnd";
import { h } from 'vue';


console.log('Container', Container);
console.log('Container', Draggable);

Container.render = function() {
  // return Container.render.call(Container, h)
  return Container.render(h)
}

Draggable.render = function() {
  // return Draggable.render.call(Draggable, h)
  return Draggable.render(h)
}

export default {
  
}

export {
  Container,
  Draggable,
}
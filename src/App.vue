<script setup>
  import { onMounted } from 'vue';
  import { RouterLink, RouterView } from 'vue-router';
  import HelloWorld from './components/HelloWorld.vue';
  import Test2 from './views/TestApi/Test2.vue';
  import Test1 from './views/TestApi/Test1.vue';
  // import Test3 from './views/TestApi/Test3.tsx';
  // import Test4 from './views/TestApi/Test4.tsx';

  // import { useCartStore } from '@/stores/cart_1';
  // const cartStore = useCartStore();
  // cartStore.addCartNum({num: 1, id: 1, name: '电视'})

  onMounted(() => {
    window.document.documentElement.setAttribute('data-skin', 'default-theme')
  })
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  
  </header> -->

  <config-provider :theme="{'theme-color': 'red'}">
    <RouterView />
  </config-provider>
  <!-- <Test2></Test2> -->
  <!-- <Test1></Test1> -->
  <!-- <Test3></Test3> -->
  <!-- <Test4></Test4> -->

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

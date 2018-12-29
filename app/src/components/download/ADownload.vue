<template>
  <span>

    <router-link :to="'/download?href=' + href" target="_blank">
      <slot>
      </slot>
    </router-link>

  </span>
</template>

<script>

export default {
  props: {
    href: ""
  }
}
</script>

<template>
<div>
  <blockquote class="twitter-tweet" data-lang="sv">
    <a :href="href">Inbäddad tweet</a>
  </blockquote>
</div>
</template>

<script>

export default {
  props: {
    href: {}
  },
  created () {
    let scr = document.createElement('script')
    scr.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    document.head.appendChild(scr)
  }
}
</script>

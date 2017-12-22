<template>
<div>

  <blockquote class="instagram-media" :data-instgrm-permalink="href" data-instgrm-version="8" ></blockquote>

</div>
</template>

<script>

export default {
  props: {
    href: {}
  },
  created () {
    let scr = document.createElement('script')
    scr.setAttribute('src', '//platform.instagram.com/en_US/embeds.js')
    document.head.appendChild(scr)
  }
}
</script>

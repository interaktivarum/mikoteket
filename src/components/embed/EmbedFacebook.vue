<template>
<div>

  <iframe :src="'https://www.facebook.com/plugins/post.php?href=' + href + '&width=350&show_text=true&appId=1595080274133613&height=402'" width="350" height="402" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

</div>
</template>

<script>

export default {
  props: {
    href: {}
  },
  created () {
  }
}
</script>

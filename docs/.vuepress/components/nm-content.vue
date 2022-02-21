<template>
  <div class="nm-content" :class="hover?' nm-content--hover nm-content--'+type:'nm-content--'+type" :style="'border-radius:'+radius+'px'">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'nm-content',
  data() {
    return {
    }
  },
  props: {
    type: {
      type: String,
      default: 'mimicry' //mimicry frosted
    },
    radius: {
      type: Number,
      default: 4
    },
    hover: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
.nm-content {
  padding: 10px;
  transition: 0.5s ease;
}
.nm-content--mimicry {
  box-shadow: -3px -3px 6px #ffffff, 3px 3px 6px rgb(169, 197, 251);
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
}
.nm-content--frosted {
  backdrop-filter: blur(12px);
  color: #fff;
}
.nm-content--hover:hover {
  box-shadow: -1px 1px 14px 5px rgb(255 255 255);
}
</style>
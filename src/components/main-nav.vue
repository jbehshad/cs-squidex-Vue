<template>
  <header class="main-nav-main-nav3" v-bind:class="rootClassName">
    <div class="main-nav-main-nav2">
      <div class="main-nav-c-llogo">
        <div class="main-nav-container">
          <img :alt="image_alt" :src="image_src" class="main-nav-image" />
        </div>
      </div>
      <nav class="main-nav-navitems">
        <div class="main-nav-mainnavitem">
          <span class="main-nav-text labelblackallcaps"><span>About</span></span>
        </div>
        <div class="main-nav-mainnavitem1">
          <span class="main-nav-text02 labelblackallcaps">
            <span>services</span>
          </span>
        </div>
        <div class="main-nav-mainnavitem2">
          <span class="main-nav-text04 labelblackallcaps"><span>work</span></span>
        </div>
        <div class="main-nav-mainnavitem3">
          <span class="main-nav-text06 labelblackallcaps">
            <span>about</span>
          </span>
          <img :alt="icon_alt" :src="icon_src" class="main-nav-icon" />
        </div>
        <button class="main-nav-button">
          <span class="main-nav-text08 labelblack"><span>Contact Us</span></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainNav',
  props: {
    image_src: {
      type: String,
      default: '/external/cs-logo.svg',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    rootClassName: String,
    icon_src: {
      type: String,
      default: '/external/iconi321-cw3m.svg',
    },
    icon_alt: {
      type: String,
      default: 'iconI321',
    },
  },
}
</script>

<style scoped>
.main-nav-main-nav3 {
  width: 100%;
  height: 69px;
  display: flex;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
}
.main-nav-main-nav2 {
  flex: 1;
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: flex-start;
  flex-shrink: 0;
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: row;
  justify-content: space-between;
}
.main-nav-c-llogo {
  width: 93px;
  height: 37px;
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-shrink: 0;
  justify-content: flex-end;
}
.main-nav-container {
  width: 92.859375px;
  height: 36.8203125px;
  display: flex;
  align-items: flex-start;
}
.main-nav-image {
  width: 200px;
  object-fit: cover;
}
.main-nav-navitems {
  gap: 15px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.main-nav-mainnavitem {
  gap: 4px;
  display: flex;
  align-items: center;
}
.main-nav-text {
  color: var(--dl-color-csl-charcoal);
  height: auto;
  text-align: center;
  line-height: normal;
}
.main-nav-mainnavitem1 {
  gap: 4px;
  display: flex;
  align-items: center;
}
.main-nav-text02 {
  color: var(--dl-color-csl-charcoal);
  height: auto;
  text-align: center;
  line-height: normal;
}
.main-nav-mainnavitem2 {
  gap: 4px;
  display: flex;
  align-items: center;
}
.main-nav-text04 {
  color: var(--dl-color-csl-charcoal);
  height: auto;
  text-align: center;
  line-height: normal;
}
.main-nav-mainnavitem3 {
  gap: 4px;
  display: flex;
  align-items: center;
}
.main-nav-text06 {
  color: var(--dl-color-csl-charcoal);
  height: auto;
  text-align: center;
  line-height: normal;
}
.main-nav-icon {
  width: 19px;
  height: 19px;
}
.main-nav-button {
  gap: 8px;
  width: auto;
  height: 40px;
  display: flex;
  padding: 16px 32px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 30px;
  justify-content: center;
  background-color: var(--dl-color-csl-cloud);
}
.main-nav-text08 {
  color: var(--dl-color-csl-charcoal);
  height: auto;
  text-align: center;
  line-height: normal;
}
.main-nav-root-class-name {
  top: 0px;
  left: 0px;
  position: absolute;
}
</style>

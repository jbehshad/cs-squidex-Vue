<template>
  <section class="csllanding-csllanding">
    <section class="csllanding-section-wrapper">
      <div class="csllanding-intro">
        <div class="csllanding-infosectionmain">
          <div class="csllanding-title">
            <span class="csllanding-text">
              <span>Beyond What People Say, </span>
              <span>Built for What People Do.</span>
            </span>
          </div>
          <div class="csllanding-frame139">
            <span class="csllanding-text3">
              <span>
                We apply behavioral science to strategize, design, and build
                technology that work for humans, and not the other way around.
              </span>
            </span>
          </div>
          <button class="csllanding-button">
            <span class="csllanding-text5 labelblack">
              <span>Let’s solve your problem</span>
            </span>
            <img :alt="icon_alt" :src="icon_src" class="csllanding-icon" />
          </button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Csllanding',
  props: {
    icon_src: {
      type: String,
      default: '/external/iconi321-qi.svg',
    },
    icon_alt: {
      type: String,
      default: 'iconI321',
    },
  },
}
</script>

<style scoped>
.csllanding-csllanding {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  justify-content: center;
  background-color: var(--dl-color-csl-mustard);
}
.csllanding-section-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: flex-start;
  padding-top: var(--dl-space-space-sevenunits);
  padding-left: var(--dl-space-space-sevenunits);
  padding-right: var(--dl-space-space-sevenunits);
  padding-bottom: var(--dl-space-space-sevenunits);
  background-color: var(--dl-color-csl-mustard);
}
.csllanding-intro {
  width: 64%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
}
.csllanding-infosectionmain {
  gap: 40px;
  top: 215px;
  left: 108px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.csllanding-title {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.csllanding-text {
  color: var(--dl-color-csl-charcoal);
  height: auto;
  font-size: 68px;
  align-self: stretch;
  font-style: Semibold;
  text-align: left;
  font-family: Clash Grotesk Variable;
  font-weight: 600;
  line-height: 100%;
  font-stretch: normal;
  text-decoration: none;
}
.csllanding-frame139 {
  display: flex;
  padding: 0 100px 0 0;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.csllanding-text3 {
  color: var(--dl-color-csl-charcoal);
  height: auto;
  flex-grow: 1;
  font-size: 22px;
  font-style: Regular;
  text-align: left;
  font-family: Satoshi Variable;
  font-weight: 400;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
.csllanding-button {
  gap: 8px;
  display: flex;
  padding: 16px 32px;
  align-items: center;
  border-radius: 30px;
  justify-content: center;
  background-color: var(--dl-color-csl-charcoal);
}
.csllanding-text5 {
  color: var(--dl-color-csl-cloud);
  height: auto;
  text-align: center;
  line-height: normal;
}
.csllanding-icon {
  width: 24px;
  height: 24px;
}
@media(max-width: 767px) {
  .csllanding-intro {
    width: 100%;
  }
  .csllanding-text {
    color: var(--dl-color-csl-charcoal);
    font-size: 68px;
    font-weight: 600;
    line-height: 100%;
    text-decoration: none;
  }
}
</style>

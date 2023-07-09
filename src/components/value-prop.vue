<template>
  <div class="value-prop-value-prop">
    <img :alt="halbessvg_alt" :src="halbessvg_src" class="value-prop-halbessvg" />
    <div class="value-prop-section-wrapper">
      <div class="value-prop-info-section-main">
        <div class="value-prop-title">
          <span class="value-prop-text">
            <span>our unique value proposition</span>
          </span>
          <span class="value-prop-text02">
            <span>Outside-in thinking, rooted in science </span>
            <span>since 2010.</span>
          </span>
        </div>
        <span class="value-prop-text05">
          <span class="value-prop-text06">
            We are a team of highly skilled behavioral scientists, designers and
            technologists who empower
            <span v-html="raw84j3"></span>
          </span>
          <span>Evidence-based Government Agencies.</span>
        </span>
      </div>
      <div class="value-prop-info-section-copy">
        <span class="value-prop-text08">
          <span>
            <span>
              Creative Science is a full-service digital agency that uses a
              combination of behavioral science and human-centered design known as
              behavioral design to create highly engaging digital experiences.
            </span>
            <br />
            <span></span>
            <br />
            <span>
              We believe real digital impact for people is not rooted only in
              faster, better technology but in understanding and designing for
              behavior.
            </span>
            <br />
            <span></span>
            <br />
            <span>
              We have supported all ranges of public and private organizations to
              help reach more people, and further organizational missions.
            </span>
            <br />
            <span></span>
            <br />
            <span>
              We aim to center the human experience at the heart of all things
              digital.
            </span>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ValueProp',
  props: {
    halbessvg_src: {
      type: String,
      default: '/external/halbessvg3298-fo7k.svg',
    },
    halbessvg_alt: {
      type: String,
      default: 'halbessvg3298',
    },
  },
  data() {
    return {
      raw84j3: ' ',
    }
  },
}
</script>

<style scoped>
.value-prop-value-prop {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  justify-content: center;
}
.value-prop-halbessvg {
  top: -25px;
  width: 50px;
  height: 50px;
  position: absolute;
}
.value-prop-section-wrapper {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  padding-top: var(--dl-space-space-eightunits);
  padding-left: var(--dl-space-space-sevenunits);
  padding-right: var(--dl-space-space-sevenunits);
  padding-bottom: var(--dl-space-space-sevenunits);
}
.value-prop-info-section-main {
  gap: 40px;
  top: 120px;
  left: 108px;
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.value-prop-title {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.value-prop-text {
  color: var(--dl-color-csl-dolphin);
  height: auto;
  font-size: 14px;
  align-self: stretch;
  font-style: Black;
  text-align: left;
  font-family: Satoshi Variable;
  font-weight: 900;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.value-prop-text02 {
  color: var(--dl-color-csl-charcoal);
  height: auto;
  font-size: 56px;
  align-self: stretch;
  font-style: Semibold;
  text-align: left;
  font-family: Clash Grotesk Variable;
  font-weight: 600;
  line-height: 100%;
  font-stretch: normal;
  text-decoration: none;
}
.value-prop-text05 {
  color: var(--dl-color-csl-charcoal);
  height: auto;
  font-size: 22px;
  align-self: stretch;
  font-style: Regular;
  text-align: left;
  font-family: Satoshi Variable;
  font-weight: 400;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
.value-prop-text06 {
  font-weight: 400;
}
.value-prop-info-section-copy {
  width: 50%;
  display: flex;
  flex-direction: column;
}
.value-prop-text08 {
  top: 120px;
  left: 762px;
  color: var(--dl-color-csl-charcoal);
  width: 100%;
  height: auto;
  font-size: 16px;
  font-style: Regular;
  text-align: left;
  font-family: Satoshi Variable;
  font-weight: 400;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
@media(max-width: 767px) {
  .value-prop-text02 {
    color: var(--dl-color-csl-charcoal);
    font-size: 56px;
    font-weight: 600;
    line-height: 100%;
    text-decoration: none;
  }
}
</style>

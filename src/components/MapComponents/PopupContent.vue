<template>
  <div>
    <div class="mapboxgl-popup-header">
      <div>Select target</div>
      <div class="mapbox-popup-close"></div>
    </div>
    <div class="mapboxgl-popup-list">
      <div
        @click="handleClick(feature)"
        v-for="feature in features.slice(0, 30)"
        :key="feature.id"
        class="mapboxgl-popup-list-item"
      >
        {{feature.properties.callsign}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupContent',
  props: {
    features: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleClick(feature) {
      this.$store.commit('setSideBarContent', feature);
    },
  },
};
</script>

<style lang="scss">
.mapboxgl-popup-tip {
  display: none;
}

.mapboxgl-popup-content {
  font-family: 'Open Sans', sans-serif;
  color: white;
  border-radius: 1rem;
  min-width: 200px;
  padding: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: #2b2a2a;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.mapboxgl-popup-list {
  max-height: 200px;
  overflow: auto;
}

.mapboxgl-popup-list-item {
  font-weight: 700;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  border-radius: 3px;
  padding: 8px;

  &:hover {
    background-color: rgba(79, 84, 92, 0.16);
  }
}

.mapboxgl-popup-close-button {
  outline: none;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  color: white;
  font-size: 1.5rem;
  padding: 0;
  position: relative;
  &:hover {
    background-color: transparent;
  }
}

.mapboxgl-popup-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 110%;
  font-weight: 800;
  padding-left: 8px;
  padding-right: 8px;
}
</style>

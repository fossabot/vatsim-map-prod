<template>
  <div class="sidebar">
    <!-- <div @click="closeSidebar" class="close-button">
      <svg
        id="closeBtn"
        class="close-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="512"
        viewBox="0 0 512 512"
      >
        <polygon
          fill="#ffffff"
          points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
        />
      </svg>
    </div> -->
    <FlightDetails v-if="content.properties.flightplan" :content="content" />
    <ControllerDetails v-else :content="content.properties" />
  </div>
</template>

<script>
import AddTrail from '@/mixins/AddTrail';
import FlightDetails from '@/components/SideBarComponents/FlightDetails.vue';
import ControllerDetails from '@/components/SideBarComponents/ControllerDetails.vue';

export default {
  components: {
    FlightDetails, ControllerDetails,
  },
  mixins: [AddTrail],
  props: ['content'],
  updated() {
    if (this.content.layer.id !== 'onlineFirboundsLayer') this.flyToFeature();
    if (this.content.properties.type === 'pilot') this.fetchTrail(this.content.properties.callsign);
  },
  mounted() {
    if (this.content.layer.id !== 'onlineFirboundsLayer') this.flyToFeature();
    if (this.content.properties.type === 'pilot') this.fetchTrail(this.content.properties.callsign);
  },
  methods: {
    closeSidebar() {
      this.$emit('closeSidebar');
    },
    flyToFeature() {
      this.$store.state.map.flyTo({
        center: this.content.geometry.coordinates,
        offset: [-150, 0],
        speed: 0.5,
        essential: true,
      });
    },
  },
};

</script>

<style lang="scss" scoped>
.sidebar {
  overflow: hidden;
  height: 100%;
  position: relative;
  background-color: $primary;
  width: min-content;
  z-index: 3;
  min-width: 400px;
  overflow: auto;
  transition: all 200ms ease-in-out;
}

.close-button {
  width: 2rem;
  height: 2rem;
  background-color: #333333;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: all 150ms ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #4d4d4d;
  }
}

.close-icon {
  width: 2rem;
  height: 2rem;
}
</style>

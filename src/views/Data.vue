<template>
  <div class="Data">
    <SubHeader
      title="Current Connections To VATSIM"
      subtitle="Browse all the current connections to the network."
    />
    <div class="content-cont">
      <div class="category-selector">
        <div class="category-title">Categories</div>
        <ol>
          <router-link :to="{ path: '/data/' }">
            <li>Pilots</li>
          </router-link>
          <router-link :to="{ path: '/data/controllers' }">
            <li>Controllers</li>
          </router-link>
          <li>Supervisors</li>
          <li>Observers</li>
        </ol>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import SubHeader from '@/components/SubHeader.vue';

export default {
  components: { SubHeader },
};
</script>

<style lang="scss" scoped>
.Data {
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  overflow-x: hidden;
}

.content-cont {
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 2rem 5rem;
  max-width: 1248px;
}

.category-selector {
  min-width: 225px;
}

.category-title {
  position: sticky;
  background-color: $tertiary;
  border-radius: 4px 4px 0 0;
  padding: 0.75rem;
  border: 1px solid $border;
  border-bottom-color: $border-dark;
}

ol {
  background-color: $secondary;
  border: 1px solid $border;
  border-top: none;
  border-radius: 0 0 4px 4px;
}

li {
  padding: 0.5rem 1rem;
}
</style>

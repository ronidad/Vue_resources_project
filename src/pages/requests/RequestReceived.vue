<template>
  <section>
    <base-card>
      <header>
        <h3>Requests Received</h3>
      </header>
      <ul v-if="hasRequests">
        <request-item
          v-for="req in receivedRequests"
          :key="req.id"
          :email="req.userEmail"
          :message="req.message"
        >
        </request-item>
      </ul>
      <h3 v-else>You havent received any request yet!</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from "../../components/ui/requests/RequestItem.vue";
export default {
  components: {
    RequestItem,
  },
  computed: {
    receivedRequests() {
      return this.$store.getters["requests/requests"];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    },
  },
};
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>

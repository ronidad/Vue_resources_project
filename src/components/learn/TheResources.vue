<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resources')"
      :mode="addResButtonMode"
      >Add Resources</base-button
    >
  </base-card>
  <keep-alive>
  <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import storedResources from './StoredResources.vue';
import addResources from './AddResources.vue';

export default {
  components: {
    storedResources,
    addResources,
  },
  data() {
    return {
      selectedTab: "stored-resources", 
      storedResources: [
        {
          id: "official-guide",
          title: "official guide",
          description: "The official vue js documentation",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "The official google documentation",
          link: "https://google.com",
        },
      ],     
      
    };
  },
  
  provide() {
    return {
        resources: this.storedResources,
        addResource: this.addResource,
        deleteResource: this.removeResource,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab === "add-resources" ? null : "flat";
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url){
        const newresource = {
            id: new Date().toISOString(),
            title:title,
            description:description,
            link:url
        };
        this.storedResources.unshift(newresource);
        this.selectedTab='stored-resources';
    },
    removeResource(resId){
      const resIndex = this.storedResources.findIndex(res=>res.id)
      this.storedResources.splice(resIndex,1);

    }
  },
};
</script>

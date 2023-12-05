<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resources')" :mode="addResButtonMode">Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
    import StoredResources from './StoredResources.vue';
    import AddResources from './AddResource.vue';
    
    export default {
        components: {
            StoredResources,
            AddResources
        },
        data() {
            return {
                selectedTab: 'stored-resources',
                storedResources: [
                    { 
                      id: 'official-guide',
                      title: 'Official Guide', 
                      description:'The official Vue.js documentation.',
                      link: 'https://vuejs.org'
                    },
                    { 
                      id: 'google',
                      title: 'Google', 
                      description:'Learn Google...',
                      link: 'https://google.org'
                    }
                ]
            };
        },
        provide() {
            return {
                //los nombres son puestos segun lo que vos quieras, no hacen referencia a nada
                resources: this.storedResources,
                addResource: this.AddResource,
                deleteResource: this.removeResources
            }
        },
        computed: {
            storedResButtonMode(){
                return this.selectedTab === 'stored-resources' ? null : 'flat';
            },
            addResButtonMode(){
                return this.selectedTab === 'add-resources' ? null : 'flat';
            }
        },
        methods: {
            setSelectedTab(tab){
                this.selectedTab = tab;
            },
            AddResource(title, description, url){
                const newResource = {
                    id: new Date().toISOString(),
                    title: title,
                    description: description,
                    link: url
                };
                this.storedResources.unshift(newResource);
                this.selectedTab = 'stored-resources';
            },
            removeResources(resId){
                const resIndex = this.storedResources.findIndex(res => res.id === resId);
                this.storedResources.splice(resIndex, 1); 
            }
        }
    }
</script>

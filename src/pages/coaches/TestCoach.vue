<template>
   <base-card>to test coach route</base-card> 

   <section>
        <base-card>
        <h2>{{ fullName }}</h2>
        <h3>$ 30/hour</h3>
        </base-card>
    </section>

    <section>
        <base-card>
        <header>
            <h2>Interested? Reach out now</h2>
            <base-button link :to="'/c1'" >Contact</base-button>
        </header>
        <router-view></router-view>
        </base-card>
    </section>
    <section>
        <base-badge> areas</base-badge>
    </section>
</template>

<script>
export default {
    props: ['id'],
    date(){
        return {
            selectedCoach:null

        };
        
    },
    created() {
        this.selectedCoach = this.$store.getters['coaches/coaches'].find(coach=>coach.id===this.id);
    },
    computed: {
        fullName() {
            return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;


        },
        areas(){
            return this.selectedCoach.areas;

        },
        rate(){
            return this.selectedCoach.hourlyRate;

        },
        description(){
            return this.selectedCoach.description;

        },
        contactLink() {
            return this.$route.path + '/' + this.id + '/contact'
        }

    },
    

}
</script>

import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters';

export default{
    namespaced:true,
    state(){
        return{
          userIsCoach:false,
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Ronald',
                    lastName: 'Mosomi',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                      "I'm Ronald and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 30
                  },
                  {
                    id: 'c2',
                    firstName: 'Benard',
                    lastName: 'Barongo',
                    areas: ['frontend', 'career'],
                    description:
                      'I am Benard and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                  },
                  {
                    id: 'c3',
                    firstName: 'Levy',
                    lastName: 'Molel',
                    areas: ['frontend', 'career'],
                    description:
                      'I am Levy and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                  }
            ]

        };
    },
    mutations,
    actions,
    getters,


    
};
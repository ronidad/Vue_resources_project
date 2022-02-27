export default{
    registerCoach(context, data) {
        const coachData = {
            id: 'c4',
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas

        };
        context.commit('registerCoach', coachData);

    }
};
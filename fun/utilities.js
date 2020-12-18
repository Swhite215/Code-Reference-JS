const sortActorOrder = actorArray => {
    return actorArray.sort(function(a, b) {
        return a.orderNumber - b.orderNumber;
    });
};

const randomOrder = actorArray => {
    const assignedNumbers = [];
    actorArray.forEach(function(actor) {
        let randomNumber = Math.floor(Math.random() * actorArray.length);
        while (assignedNumbers.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * actorArray.length);
        }

        assignedNumbers.push(randomNumber);
        actor.orderNumber = randomNumber;
    });
    //console.log(assignedNumbers);
};

const buildTeam = (...members) => {
    let totalHealth = 0;

    members.forEach(function(member) {
        totalHealth += member.health;
    });

    //console.log(totalHealth);

    return {
        members: [...members],
        health: totalHealth
    };
};

module.exports = {
    sortActorOrder,
    randomOrder,
    buildTeam
};

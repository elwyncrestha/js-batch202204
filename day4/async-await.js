async function organizeBirthdayParty() {
    await inviteFamilyMembers();
    inviteColleagues();
}

async function inviteFamilyMembers() {
    return new Promise((res) => {
        setTimeout(() => {
            console.log('Family members invited!');
            res();
        }, 5000);
    });
}

function inviteColleagues() {
    console.log('Colleagues invited!');
}

organizeBirthdayParty();

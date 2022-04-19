// using promises
// function organizeBirthdayParty() {
//   inviteFamilyMembers().then((v) => {
//     console.log(v);
//     inviteColleagues().then((v) => console.log(v));
//   });
// }

// function inviteFamilyMembers() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res("Family members invited!");
//     }, 5000);
//   });
// }

// function inviteColleagues() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res("Colleagues invited!");
//     }, 5000);
//   });
// }

// organizeBirthdayParty();

// async-await
async function organizeBirthdayParty() {
  const familyInvitations = await inviteFamilyMembers();
  console.log(familyInvitations);
  const colleaguesInvitations = await inviteColleagues();
  console.log(colleaguesInvitations);
}

function inviteFamilyMembers() {
  return new Promise((res) => {
    setTimeout(() => {
      res("Family members invited!");
    }, 5000);
  });
}

function inviteColleagues() {
  return new Promise((res) => {
    setTimeout(() => {
      res("Colleagues invited!");
    }, 5000);
  });
}

organizeBirthdayParty();

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  var teamName = "";

  members.forEach((element) => {
    if (typeof(element) === "string" && (!Array.isArray(element)) && element !== null) {
      let i = 0;
      while (element[i] === ' ') {
        i++; 
      }
      //teamName += element[i];
      
      //if (!teamName.includes(element[i].toUpperCase())) {
        teamName += element[i];
      //}
    }
  });
  return teamName.toUpperCase().split('').sort().join('');
};

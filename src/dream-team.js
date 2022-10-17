const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamDream = '';
  let newArr = [];
  if (!Array.isArray(members)) {
    return false;
  }

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string')
      newArr.push(members[i].trim().toUpperCase().slice(0, 1));
  }
  let newArrSort = newArr.sort();

  for (let j = 0; j < newArrSort.length; j++) {
    teamDream = teamDream + newArrSort[j];

  }
  return teamDream;
};

module.exports = {
  createDreamTeam
};

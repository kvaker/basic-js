const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const prev = email.lastIndexOf('@')
  const domain = email.slice(prev + 1)

  if (email === '') {
    return 'Введите значение';
  }
  return domain;
}

module.exports = {
  getEmailDomain
};

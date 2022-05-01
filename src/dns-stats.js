const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  domains = domains.map(domain => domain.split('.').reverse())
  
  let allDomains = [];
  domains.forEach(domain => {
    for(let i = 0; i < domain.length; i++) {
      allDomains.push(domain.slice(0, i + 1))
    }
  })
  
  allDomains = allDomains.map(domain => `.${domain.join('.')}`)
  
  return allDomains.reduce((res, domain) => {
    res[domain] ? res[domain] += 1 : res[domain] = 1;
    return res; 
  }, {})
}

module.exports = {
  getDNSStats
};

domains = [
 'code.yandex.ru',
 'music.yandex.ru',
 'yandex.ru'
]
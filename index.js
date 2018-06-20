/**
 * Remove all instances of `:root` but one from a stylesheet. 
 * @link https://github.com/shannonhochkins/postcss-only-one-root
 */

var postcss = require('postcss');
module.exports = postcss.plugin('only-one-root', function (opts) {
  return function (css) {
    const fileExluded = css.source.input.css.includes('postcss-allow-root');
    css.walkRules(function (rule) {
      if (rule.selector === ':root' && !fileExluded) {
        rule.remove();
      }
    });
  };
});

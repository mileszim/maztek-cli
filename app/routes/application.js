import Route from '@ember/routing/route';

export default Route.extend({
  title(tokens) {
    return `${tokens.join(' | ')}${tokens.length ? '| ' : ''}maztek`;
  }
});

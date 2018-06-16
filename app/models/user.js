import DS from 'ember-data';

export default DS.Model.extend({
  online: DS.attr('boolean'),
  sessionCount: DS.attr('number'),

  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
});

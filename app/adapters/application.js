// import DS from 'ember-data';

// export default DS.JSONAPIAdapter.extend({
// });

import LFAdapter from 'ember-localforage-adapter/adapters/localforage';

export default LFAdapter.extend({
  namespace: 'bug-tracker'
});
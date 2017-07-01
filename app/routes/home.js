import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  router: inject.service(),
  fastboot: inject.service(),

  beforeModel() {
    console.log('beforeModel', this.get('router.currentURL'), this.get('router.currentRouteName'));
  },

  model() {
    console.log('model', this.get('router.currentURL'), this.get('router.currentRouteName'));
  },

  afterModel() {
    console.log('afterModel', this.get('router.currentURL'), this.get('router.currentRouteName'));
  },

  actions: {
    didTransition() {
      console.log('didTransition', this.get('router.currentURL'), this.get('router.currentRouteName'));

      Ember.run.later(() => {
        console.log('run.later', this.get('router.currentURL'), this.get('router.currentRouteName'));
      }, 0);
    }
  }
});

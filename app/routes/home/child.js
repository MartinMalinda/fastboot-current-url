import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  router: inject.service(),
  fastboot: inject.service(),

  beforeModel() {
    console.log('child beforeModel', this.get('router.currentURL'), this.get('router.currentRouteName'));
  },

  model() {
    console.log('child model', this.get('router.currentURL'), this.get('router.currentRouteName'));
  },

  afterModel() {
    console.log('child afterModel', this.get('router.currentURL'), this.get('router.currentRouteName'));
  },

  actions: {
    didTransition() {
      console.log('child didTransition', this.get('router.currentURL'), this.get('router.currentRouteName'));

      Ember.run.later(() => {
        console.log('child run.later', this.get('router.currentURL'), this.get('router.currentRouteName'));
      }, 0);
    }
  }
});

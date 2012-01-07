App.FlashView = Em.View.extend({
  contentBinding: 'Who.flashController.content',
  classNameBindings: ['isNotice', 'isWarning', 'isError'],
  isNoticeBinding: 'content.isNotice',
  isWarningBinding: 'content.isWarning',
  isErrorBinding: 'content.isError',

  didInsertElement: function() {
    this.$('#message').hide();
    Who.flashController.set('view', this);
  },

  show: function(callback) {
    this.$('#message').
      css({ top: '-9px' }).
      animate({ top: '40px', opacity: 'toggle' }, 700, callback);
  },

  hide: function(callback) {
    this.$('#message').
      css({ top: '40px' }).
      animate({ top: '-9px', opacity: 'toggle' }, 700, callback);
  }
});
//
// App spec
//
// ----------------------------------------------------------------------------

define([ 'app' ], function(app) {

  describe('application', function() {

    it('is defined', function() {

      expect(app).to.be.defined;

    });

    it('has controllers', function() {

      expect(app.controllers).to.be.defined;

    });

  });

});

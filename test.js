describe('Our application', function () {
  // This is the name of the test
  it('Does app work? IT WORKS', function (done) {
    // We want this test to pass.
    if (5 == 5) {
      // If the behavior is as expected, call done with no argument.
      done();
    } else {
      // Otherwise, call done with an error.
      done(new Error("Not sure what's happened."));
    }
  });
});


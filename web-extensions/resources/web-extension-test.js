'use strict';

function webextension_test(extension_path, test_function, name, properties) {
  // TODO: implement the webextension test logic here.
  return promise_test(async (t) => {
    const {extension} = await test_driver.bidi.webExtension.install({
      type: 'path',
      path: extension_path,
    });
    try {
      await test_function(t);
    } finally {
      await test_driver.bidi.webExtension.uninstall({extension});
    }
  }, name, properties);
}
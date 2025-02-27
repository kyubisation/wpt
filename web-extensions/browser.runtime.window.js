// META: script=/resources/testdriver.js?feature=bidi
// META: script=/resources/testdriver-vendor.js
// META: script=/web-extensions/resources/web-extension-test.js

'use strict';


promise_test(async (t) => {
  const {extension} = await test_driver.bidi.webExtension.install({
    extensionData: {
      type: 'path',
      path: '/web-extensions/resources/runtime',
    }
  });

  await test_driver.bidi.webExtension.uninstall({
    extension
  });
}, "test install uninstall");
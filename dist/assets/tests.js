define('bugtracker/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('bugtracker/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('bugtracker/tests/bugs/details/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - bugs/details');
  QUnit.test('bugs/details/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bugs/details/route.js should pass jshint.');
  });
});
define('bugtracker/tests/bugs/edit/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - bugs/edit');
  QUnit.test('bugs/edit/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bugs/edit/route.js should pass jshint.');
  });
});
define('bugtracker/tests/bugs/new/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - bugs/new');
  QUnit.test('bugs/new/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'bugs/new/route.js should pass jshint.');
  });
});
define('bugtracker/tests/bugs/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - bugs');
  QUnit.test('bugs/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'bugs/route.js should pass jshint.\nbugs/route.js: line 22, col 119, Expected an assignment or function call and instead saw an expression.\n\n1 error');
  });
});
define('bugtracker/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('bugtracker/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('bugtracker/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'bugtracker/tests/helpers/start-app', 'bugtracker/tests/helpers/destroy-app'], function (exports, _qunit, _bugtrackerTestsHelpersStartApp, _bugtrackerTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _bugtrackerTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _bugtrackerTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('bugtracker/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('bugtracker/tests/helpers/resolver', ['exports', 'ember-resolver', 'bugtracker/config/environment'], function (exports, _emberResolver, _bugtrackerConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _bugtrackerConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _bugtrackerConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('bugtracker/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('bugtracker/tests/helpers/start-app', ['exports', 'ember', 'bugtracker/app', 'bugtracker/config/environment'], function (exports, _ember, _bugtrackerApp, _bugtrackerConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _bugtrackerConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _bugtrackerApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('bugtracker/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('bugtracker/tests/models/bug.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/bug.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/bug.js should pass jshint.');
  });
});
define('bugtracker/tests/models/comment.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/comment.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/comment.js should pass jshint.');
  });
});
define('bugtracker/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('bugtracker/tests/test-helper', ['exports', 'bugtracker/tests/helpers/resolver', 'ember-qunit'], function (exports, _bugtrackerTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_bugtrackerTestsHelpersResolver['default']);
});
define('bugtracker/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('bugtracker/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('bugtracker/tests/unit/adapters/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/application-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('bugtracker/tests/unit/bugs/details/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:bugs/details', 'Unit | Route | bugs/details', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('bugtracker/tests/unit/bugs/details/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/bugs/details');
  QUnit.test('unit/bugs/details/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/bugs/details/route-test.js should pass jshint.');
  });
});
define('bugtracker/tests/unit/bugs/edit/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:bugs/edit', 'Unit | Route | bugs/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('bugtracker/tests/unit/bugs/edit/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/bugs/edit');
  QUnit.test('unit/bugs/edit/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/bugs/edit/route-test.js should pass jshint.');
  });
});
define('bugtracker/tests/unit/bugs/new/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:bugs/new', 'Unit | Route | bugs/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('bugtracker/tests/unit/bugs/new/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/bugs/new');
  QUnit.test('unit/bugs/new/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/bugs/new/route-test.js should pass jshint.');
  });
});
define('bugtracker/tests/unit/bugs/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:bugs', 'Unit | Route | bugs', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('bugtracker/tests/unit/bugs/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/bugs');
  QUnit.test('unit/bugs/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/bugs/route-test.js should pass jshint.');
  });
});
define('bugtracker/tests/unit/models/bug-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('bug', 'Unit | Model | bug', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('bugtracker/tests/unit/models/bug-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/bug-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/bug-test.js should pass jshint.');
  });
});
define('bugtracker/tests/unit/models/comment-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('comment', 'Unit | Model | comment', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('bugtracker/tests/unit/models/comment-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/comment-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/comment-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('bugtracker/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
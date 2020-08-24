const router = require('express').Router({
  strict: true,
  caseSensitive: true,
  mergeParams: true,
});

const { searchController } = require('./controllers');

const routes = (router) => {
  router.post('/search', searchController.search);
};

routes(router);

module.exports = router;

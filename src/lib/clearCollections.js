function clearCollections(mongo) {
  Object.keys(mongo.connection.collections).forEach((coll) => {
    mongo.connection.collections[coll].deleteMany(() => {});
  });
}

module.exports = clearCollections;

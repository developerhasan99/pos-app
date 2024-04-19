/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("on2kvsz5usmctos")

  collection.createRule = ""
  collection.updateRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("on2kvsz5usmctos")

  collection.createRule = null
  collection.updateRule = ""

  return dao.saveCollection(collection)
})

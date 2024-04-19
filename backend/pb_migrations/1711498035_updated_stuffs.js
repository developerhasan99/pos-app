/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ig5yflvntsnwsr")

  collection.name = "staffs"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ig5yflvntsnwsr")

  collection.name = "stuffs"

  return dao.saveCollection(collection)
})

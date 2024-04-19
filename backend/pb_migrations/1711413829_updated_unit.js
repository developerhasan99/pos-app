/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dx8cq90cy1jjucd")

  collection.name = "units"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dx8cq90cy1jjucd")

  collection.name = "unit"

  return dao.saveCollection(collection)
})

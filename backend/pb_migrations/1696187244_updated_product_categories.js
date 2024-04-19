/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ws2u5fvtd3wygpu")

  collection.name = "categories"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ws2u5fvtd3wygpu")

  collection.name = "product_categories"

  return dao.saveCollection(collection)
})

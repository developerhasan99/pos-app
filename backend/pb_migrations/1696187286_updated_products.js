/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iln3jiesu24yri5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6ya47u2t",
    "name": "category",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ws2u5fvtd3wygpu",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iln3jiesu24yri5")

  // remove
  collection.schema.removeField("6ya47u2t")

  return dao.saveCollection(collection)
})

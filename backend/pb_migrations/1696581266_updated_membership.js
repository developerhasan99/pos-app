/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("on2kvsz5usmctos")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vyjmmggk",
    "name": "store",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "t4ywghdunbtntnm",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("on2kvsz5usmctos")

  // remove
  collection.schema.removeField("vyjmmggk")

  return dao.saveCollection(collection)
})

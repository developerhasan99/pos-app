/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ws2u5fvtd3wygpu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mqypnb2r",
    "name": "store",
    "type": "relation",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("ws2u5fvtd3wygpu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mqypnb2r",
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
})

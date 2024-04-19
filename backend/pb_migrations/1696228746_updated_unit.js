/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dx8cq90cy1jjucd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "foxrmknp",
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
  const collection = dao.findCollectionByNameOrId("dx8cq90cy1jjucd")

  // remove
  collection.schema.removeField("foxrmknp")

  return dao.saveCollection(collection)
})

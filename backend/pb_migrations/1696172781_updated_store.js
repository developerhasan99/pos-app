/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t4ywghdunbtntnm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y8ixwwka",
    "name": "logo",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t4ywghdunbtntnm")

  // remove
  collection.schema.removeField("y8ixwwka")

  return dao.saveCollection(collection)
})

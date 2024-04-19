/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("on2kvsz5usmctos")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ta5vzmet",
    "name": "last_payment",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("on2kvsz5usmctos")

  // remove
  collection.schema.removeField("ta5vzmet")

  return dao.saveCollection(collection)
})

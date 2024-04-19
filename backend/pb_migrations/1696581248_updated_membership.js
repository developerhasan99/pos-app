/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("on2kvsz5usmctos")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3s69tslz",
    "name": "plan",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "trial",
        "small",
        "large",
        "massive"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("on2kvsz5usmctos")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3s69tslz",
    "name": "plan",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "trial",
        "small",
        "large",
        "big"
      ]
    }
  }))

  return dao.saveCollection(collection)
})

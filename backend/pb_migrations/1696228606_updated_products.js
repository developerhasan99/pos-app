/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iln3jiesu24yri5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cdlsfo4z",
    "name": "author",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
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
  collection.schema.removeField("cdlsfo4z")

  return dao.saveCollection(collection)
})

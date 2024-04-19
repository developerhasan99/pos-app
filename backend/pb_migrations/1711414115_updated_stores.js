/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t4ywghdunbtntnm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wxlnv0yq",
    "name": "admin",
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
  const collection = dao.findCollectionByNameOrId("t4ywghdunbtntnm")

  // remove
  collection.schema.removeField("wxlnv0yq")

  return dao.saveCollection(collection)
})

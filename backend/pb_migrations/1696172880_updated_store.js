/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t4ywghdunbtntnm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kj0a4qhg",
    "name": "website",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t4ywghdunbtntnm")

  // remove
  collection.schema.removeField("kj0a4qhg")

  return dao.saveCollection(collection)
})

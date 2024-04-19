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
    "required": true,
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vyjmmggk",
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

  // update
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
})

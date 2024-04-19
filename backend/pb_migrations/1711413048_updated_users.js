/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("hs51bnui")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lecma4wt",
    "name": "role",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "owner",
        "seller",
        "accountant",
        "stock_manager"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hs51bnui",
    "name": "store_id",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lecma4wt",
    "name": "role",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "owner",
        "seller",
        "accountant",
        "stock_manager"
      ]
    }
  }))

  return dao.saveCollection(collection)
})

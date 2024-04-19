/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iln3jiesu24yri5")

  // remove
  collection.schema.removeField("kg8i55pz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kv0q6fvy",
    "name": "unit",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "dx8cq90cy1jjucd",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kg8i55pz",
    "name": "unit",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Piece",
        "Dozen",
        "KG",
        "Liter",
        "Meter"
      ]
    }
  }))

  // remove
  collection.schema.removeField("kv0q6fvy")

  return dao.saveCollection(collection)
})

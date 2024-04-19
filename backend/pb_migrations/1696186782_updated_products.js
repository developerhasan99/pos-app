/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iln3jiesu24yri5")

  // update
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iln3jiesu24yri5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kg8i55pz",
    "name": "measurement_unit",
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

  return dao.saveCollection(collection)
})

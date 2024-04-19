/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iln3jiesu24yri5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "diiuerju",
    "name": "purches_price",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zrn0n0en",
    "name": "sell_price",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ul2u7e5b",
    "name": "quantity",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iln3jiesu24yri5")

  // remove
  collection.schema.removeField("diiuerju")

  // remove
  collection.schema.removeField("zrn0n0en")

  // remove
  collection.schema.removeField("ul2u7e5b")

  // remove
  collection.schema.removeField("kg8i55pz")

  return dao.saveCollection(collection)
})

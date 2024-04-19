/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t4ywghdunbtntnm")

  // remove
  collection.schema.removeField("aowatvje")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zsl3p5ha",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ntcbaiwz",
    "name": "address",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hyiva6x5",
    "name": "phone",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t4ywghdunbtntnm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aowatvje",
    "name": "name",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("zsl3p5ha")

  // remove
  collection.schema.removeField("ntcbaiwz")

  // remove
  collection.schema.removeField("hyiva6x5")

  return dao.saveCollection(collection)
})

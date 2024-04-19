/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ws2u5fvtd3wygpu",
    "created": "2023-10-01 19:05:42.772Z",
    "updated": "2023-10-01 19:05:42.772Z",
    "name": "product_categories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3a62g7tb",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ws2u5fvtd3wygpu");

  return dao.deleteCollection(collection);
})

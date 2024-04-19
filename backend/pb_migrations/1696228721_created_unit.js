/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dx8cq90cy1jjucd",
    "created": "2023-10-02 06:38:41.057Z",
    "updated": "2023-10-02 06:38:41.057Z",
    "name": "unit",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pco4nooi",
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
  const collection = dao.findCollectionByNameOrId("dx8cq90cy1jjucd");

  return dao.deleteCollection(collection);
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "t4ywghdunbtntnm",
    "created": "2023-10-01 02:37:10.945Z",
    "updated": "2023-10-01 02:37:10.945Z",
    "name": "store",
    "type": "base",
    "system": false,
    "schema": [
      {
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
  const collection = dao.findCollectionByNameOrId("t4ywghdunbtntnm");

  return dao.deleteCollection(collection);
})

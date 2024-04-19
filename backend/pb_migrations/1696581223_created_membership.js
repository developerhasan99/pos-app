/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "on2kvsz5usmctos",
    "created": "2023-10-06 08:33:43.372Z",
    "updated": "2023-10-06 08:33:43.372Z",
    "name": "membership",
    "type": "base",
    "system": false,
    "schema": [
      {
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
            "big"
          ]
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
  const collection = dao.findCollectionByNameOrId("on2kvsz5usmctos");

  return dao.deleteCollection(collection);
})

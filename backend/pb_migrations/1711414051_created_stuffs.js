/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4ig5yflvntsnwsr",
    "created": "2024-03-26 00:47:31.421Z",
    "updated": "2024-03-26 00:47:31.421Z",
    "name": "stuffs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zuvk1h9j",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "78islscz",
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
      },
      {
        "system": false,
        "id": "cdpca6kl",
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
  const collection = dao.findCollectionByNameOrId("4ig5yflvntsnwsr");

  return dao.deleteCollection(collection);
})

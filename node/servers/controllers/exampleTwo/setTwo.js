let router = require("express").Router();
let SomethingServiceLayer = require("../../services/somethingService");
let somethingService = new SomethingServiceLayer();

/**
 * @swagger
 * path: /api/exampleOne
 * operations:
 *   -  httpMethod: GET
 *      summary: Retrieves the something
 *      notes: Retrieves the something
 *      nickname: GetSomething
 *      consumes:
 *        - text/html
 *      parameters:
 *        - name: id
 *          description: Optional something Id
 *          required: false
 *          dataType: string
 *          paramType: query
 */
router.get("/exampleOne", async (req, res, next) => {
    let isGetSuccessful = false;

    try {
        isGetSuccessful = await somethingService.getSomething(req.query.id);
        res.send(isGetSuccesful);
    } catch (e) {
        next(e);
    }

    !isGetSuccessful
        ? res.sendStatus(409, "Get was not sucessful")
        : res.sendStatus(200);
});

/**
 * @swagger
 * path: /api/exampleOne
 * operations:
 *   -  httpMethod: POST
 *      summary: Saves a new something
 *      notes: Saves a new something
 *      nickname: SaveSomething
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: body
 *          description: something object
 *          required: true
 *          dataType: Something
 *          paramType: body
 */
router.post("/exampleOne", async (req, res, next) => {
    let isCreateSuccessful = false;

    try {
        isCreateSuccessful = await somethingService.createSomething(something);
    } catch (e) {
        next(e);
    }

    !isCreateSuccessful
        ? res.sendStatus(409, "Create not sucessful")
        : res.sendStatus(200);
});

/**
 * @swagger
 * path: /api/exampleOne
 * operations:
 *   -  httpMethod: PUT
 *      summary: Update an existing something
 *      notes: Update an existing something
 *      nickname: UpdateSomething
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: body
 *          description: something object
 *          required: true
 *          dataType: Something
 *          paramType: body
 */
router.put("/exampleOne", async (req, res, next) => {
    let isUpdateSuccessful = false;

    try {
        isUpdateSuccessful = await somethingService.updateSomething(something);
    } catch (e) {
        next(e);
    }

    !isUpdateSuccessful
        ? res.sendStatus(409, "Update not sucessful")
        : res.sendStatus(200);
});

/**
 * @swagger
 * path: /api/exampleOne/{id}
 * operations:
 *   -  httpMethod: DELETE
 *      summary: Deletes something
 *      notes: Deletes something
 *      nickname: DeleteSomething
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: id
 *          required: true
 *          dataType: string
 *          paramType: path
 */
router.delete("/exampleOne/:id", async (req, res, next) => {
    let isDeleteSuccessful = false;

    try {
        isDeleteSuccessful = await somethingService.deleteSomething(
            req.params.id
        );
    } catch (e) {
        next(e);
    }

    !isDeleteSuccessful ? res.sendStatus(409) : res.sendStatus(200);
});

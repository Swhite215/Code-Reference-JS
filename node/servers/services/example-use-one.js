const CrudAPI = require("./crud-api");
const DynamicAPI = require("./dynamic-api");

const main = (async function() {
    let categoryItem = await CrudAPI.get_something("1");

    console.log(categoryItem);

    await DynamicAPI.get_bearer();

    let dynamicItem = DynamicAPI.generateRequestURL("dynamic", 1, "item").get();

    console.log(dynamicItem);
})();

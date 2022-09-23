
let recipes;
async function getJson(dataPath)
{
    await fetch('./recipes.json').then((response) => response.json()).then((json) => {recipes = json;});
    const recipe_list = document.querySelector(".recipes");
    recipes.forEach(recipe => {
        var node = document.createElement('li');
        node.appendChild(document.createTextNode(recipe["Name"]));
        node.classList.add("recipe");
        node.addEventListener("click", function() 
        {
            node.classList.toggle("recipe-open");
        })
        recipe_list.appendChild(node);
    });
}

getJson('recipes.js');

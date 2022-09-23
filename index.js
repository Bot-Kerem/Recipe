
let recipes;
async function getJson(dataPath)
{
    await fetch('./recipes.json').then((response) => response.json()).then((json) => {recipes = json;});
    const recipe_list = document.querySelector(".recipes");
    recipes.forEach(recipe => {
        var node = document.createElement('li');
        var description = document.createElement('p');
        description.appendChild(document.createTextNode("AAAAA"));
        description.classList.add("nested");
        node.appendChild(document.createTextNode(recipe["Name"]));
        node.appendChild(description);
        node.classList.add("recipe");
        node.addEventListener("click", function() 
        {
            node.classList.toggle("recipe-open");
            const childs = node.childNodes;
            for(let i = 1; i <= childs.length; i++)
            {
                childs[i].classList.toggle("active");
            }
        })
        recipe_list.appendChild(node);
    });
}

getJson('recipes.js');

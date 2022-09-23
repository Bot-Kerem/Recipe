
let recipes;
async function getJson(dataPath)
{
    await fetch('./recipes.json').then((response) => response.json()).then((json) => {recipes = json;});
    const recipe_list = document.querySelector(".recipes");
    recipes.forEach(recipe => {
        const node = document.createElement('li');
        const description = document.createElement('p');
        const method = document.createElement('p');
        description.appendChild(document.createTextNode(recipe["Description"]));
        method.appendChild(document.createTextNode(recipe["Method"]));
        const ingredients = document.createElement('ul');
        const ingredient_names = recipe["Ingredients"];
        for (let i = 0; i < ingredient_names.length; i++) {
            const ingredient = document.createElement('li');
            ingredient.appendChild(document.createTextNode(ingredient_names[i]));
            ingredients.appendChild(ingredient);
        }
        
        description.classList.add("nested");
        ingredients.classList.add("nested");
        method.classList.add("nested");
        node.appendChild(document.createTextNode(recipe["Name"]));
        node.appendChild(description);
        node.appendChild(ingredients);
        node.appendChild(method);
        node.classList.add("recipe");
        node.addEventListener("click", function() 
        {
            node.classList.toggle("recipe-open");
            const childs = node.childNodes;
            for(let i = 1; i <= childs.length; i++)
            {
                childs[i].classList.toggle("nested");
            }
        })
        recipe_list.appendChild(node);
    });
}

getJson('recipes.js');

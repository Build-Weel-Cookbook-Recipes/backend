cookbook-BE
Secret Family Recipe Cookbook - Backend

Section Contents:

/auth/login POST
/auth/register POST
/recipes GET
/recipes POST
/recipes/:id GET
/recipes/:id PUT
/recipes/:id DELETE
/auth/login POST
Expects an object with this format as the request body:

{
  "username": "User1",   //string
  "password": "abc123" //string
}
/auth/register POST
Expects an object with this format as the request body:

{
  "username": "User1",   //string
  "password": "password" //string
}
/recipes GET
Requires an authorization header with a JWT. it will return an array of objects in this format:

  "recipes": [
        {
            "id": 2,
            "user_id": 1,
            "title": "Pomello",
            "source": "Lester",
            "notes": "Re-engineered empowering workforce",
            "tags": [
                "pie",
                "seafood"
            ]
        },
        {
            "id": 7,
            "user_id": 1,
            "title": "Wine - Ej Gallo Sierra Valley",
            "source": "Winnie",
            "notes": "Function-based global attitude",
            "tags": [
                "soup",
                "desserts",
                "sandwich"
            ]
        }
/recipes POST
Requires an authorization header with a JWT. Expects an object with this format as the request body:

    {
        "title": "Pomello",
        "source": "Lester",
        "notes": "Re-engineered empowering workforce",
        "ingredients": [
            "Creme De Menth - White"
        ],
        "instructions": [
            "curabitur convallis duis consequat dui nec nisi volutpat eleifend",
            "venenatis lacinia aenean sit amet justo morbi ut odio cras"
        ],
        "tags": [
            "pie",
            "seafood"
        ]
    }
/recipes/:id GET
Requires an authorization header with a JWT. The object represents the recipe with the ID specified in the path:

  "recipe": {
        "id": 2,
        "user_id": 1,
        "title": "Pomello",
        "source": "Lester",
        "notes": "Re-engineered empowering workforce",
        "ingredients": [
            "Creme De Menth - White"
        ],
        "instructions": [
            "curabitur convallis duis consequat dui nec nisi volutpat eleifend",
            "venenatis lacinia aenean sit amet justo morbi ut odio cras"
        ],
        "tags": [
            "pie",
            "seafood"
        ]
    }
/recipes/:id PUT
Requires an authorization header with a JWT. Expects an object with this format as the request body:

    {
        "title": "Pomello",
        "source": "Lester",
        "notes": "Re-engineered empowering workforce",
        "ingredients": [
            "Creme De Menth - White"
        ],
        "instructions": [
            "curabitur convallis duis consequat dui nec nisi volutpat eleifend",
            "venenatis lacinia aenean sit amet justo morbi ut odio cras"
        ],
        "tags": [
            "pie",
            "seafood"
        ]
    }
/recipes/:id DELETE
Requires an authorization header with a JWT. Deletes the selected recipe if it exists and is associated with the current user.
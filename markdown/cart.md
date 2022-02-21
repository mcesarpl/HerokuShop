### **URL**

  **_/find_**

* **Method:**

  `GET`

    ----
  
*  **URL Requirements**

    ----
    ----

    ### **GET**
    <br />
 
    **Example :**

   `/find?id=1`


    <br />

    _**Header**:_

    ```json
        {
            "authorization": "authorization_token"
        }
    ```

    <br />

    ----

    ### **Success :**

    * **Code:** 200 <br />
      **Content:** `{ [{"id": 1, "abandoned": false}, ...] },`

    ### **Unauthorized :**

    * **Code:** 401 <br />
      **Content:** `{ message: Unauthorized }`
 
    ### **Error :**

    * **Code:** 500 <br />
      **Content:** `{ error: Internal server Error. }`

    <br />

    ----
    ----

### **URL**

  **_/insert_**

* **Method:**

  `POST`

    ----
  
*  **URL Requirements**

    ----
    ----
    <br />
 
    **Example :**

   `/insert`


    <br />

    _**Header**:_

    ```json
        {
            "authorization": "authorization_token"
        }
    ```

    _**Body**:_

    ```json
        {
	        "abandoned": false,
	        "itens": [
	        	{
	        	"id": 2,
	        	"type": "book",
	        	"price": 45.5,
	        	"discount": 1.1
	          },
	          {
	          	"id": 1,
	          	"type": "movie",
	          	"price": 4,
	          	"discount": 1.5
	          },
	          {
	          	"id": 2,
	          	"type": "movie",
	          	"price": 10,
	          	"discount": 0.5
	          }
	        ],
        "taxes": 0.2
      }
    ```


    <br />

    ----

    ### **Success :**

    * **Code:** 200 <br />
      **Content:** `{"id": 1, "abandoned": false, ...},`

    ### **Unprocessable Entity:**

    * **Code:** 422 <br />
      **Content:** `{ message: Unprocessable Entity }`

    ### **Unauthorized :**

    * **Code:** 401 <br />
      **Content:** `{ message: Unauthorized }`
 
    ### **Error :**

    * **Code:** 500 <br />
      **Content:** `{ error: Internal server Error }`

    <br />

    ----
    ----

    ### **URL**

  **_/update_**

* **Method:**

  `PUT`

    ----
  
*  **URL Requirements**

    ----
    ----
    <br />
 
    **Example :**

   `/update`


    <br />

    _**Header**:_

    ```json
        {
            "authorization": "authorization_token"
        }
    ```

    _**Body**:_

    ```json
        {
          "id": "1",
        	"abandoned": false,
	        "itens": [
	        	{
	        	"id": 2,
	        	"type": "book",
	        	"price": 45.5,
	        	"discount": 1.1
	          },
	          {
	          	"id": 1,
	          	"type": "movie",
	          	"price": 4,
	          	"discount": 1.5
	          },
	          {
	          	"id": 2,
	          	"type": "movie",
	          	"price": 10,
	          	"discount": 0.5
	          }
	        ],
          "taxes": 0.2
        }
    ```


    <br />

    ----

    ### **Success :**

    * **Code:** 200 <br />
      **Content:** `{"id": 1, "abandoned": false, ...},`

    ### **Unauthorized :**

    * **Code:** 401 <br />
      **Content:** `{ message: Unauthorized }`
 
    ### **Error :**

    * **Code:** 500 <br />
      **Content:** `{ error: Internal server Error }`

    <br />

    ----
    ----

    ### **URL**

  **_/delete/:id_**

* **Method:**

  `DELETE`

    ----
  
*  **URL Requirements**

    ----
    ----
    <br />
 
    **Example :**

   `/delete/1`


    <br />

    _**Header**:_

    ```json
        {
            "authorization": "authorization_token"
        }
    ```

    <br />

    ----

    ### **Success :**

    * **Code:** 201 <br />

    ### **Unauthorized :**

    * **Code:** 401 <br />
      **Content:** `{ message: Unauthorized }`
 
    ### **Error :**

    * **Code:** 500 <br />
      **Content:** `{ error: Internal server Error }`

    <br />

    ----
    ----
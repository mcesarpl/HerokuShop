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

   `/find?name=test`


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
      **Content:** `{ [{"id": 1, "name": "test"}, ...] },`

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
        	"name": "test",
        	"price": 10,
        	"discount": 0.5,
        	"duration": 120,
        	"rating": 8.5
        }
    ```


    <br />

    ----

    ### **Success :**

    * **Code:** 200 <br />
      **Content:** `{"id": 1, "name": "test", ...},`

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
        	"name": "new test",
        	"price": 9,
        	"discount": 0.1,
        	"duration": 120,
        	"rating": 8.5
        }
    ```


    <br />

    ----

    ### **Success :**

    * **Code:** 200 <br />
      **Content:** `{"id": 1, "name": "new test", ...},`

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
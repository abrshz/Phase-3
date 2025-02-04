const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

// Middleware 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Connection database 
const connection = mysql.createConnection({
    host: "localhost",
    user: "myDBuser",
    password: "mydbuser",
    database: "myDB"
})

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
    }
}
)

// Create table 
app.get("/install" , (req, res) => {

    // Products table
    let products = `CREATE TABLE IF NOT EXISTS products (
       product_id INT AUTO_INCREMENT,
       product_url VARCHAR(255) NOT NULL,
       product_name VARCHAR(255) NOT NULL,
       PRIMARY KEY (product_id)
       )`;

    //    Product description table
    let product_description = `CREATE TABLE IF NOT EXISTS description (
        description_id INT AUTO_INCREMENT,
        product_id INT(11) NOT NULL,
        product_brief_description TEXT  NOT NULL,
        product_description TEXT NOT NULL,
        product_img VARCHAR(255),
        product_link VARCHAR(255),
        PRIMARY KEY (description_id),
        FOREIGN KEY (product_id) REFERENCES products (product_id)
        )`;

        // Product price table

     let product_price = `CREATE TABLE IF NOT EXISTS productprice (
        price_id INT AUTO_INCREMENT,
        product_id INT(11) NOT NULL,
        starting_price VARCHAR(255) NOT NULL,
        price_range VARCHAR(255) NOT NULL,
        PRIMARY KEY (price_id),
        FOREIGN KEY (product_id) REFERENCES products (product_id)
        )`;

           // User table

           let user = `CREATE TABLE IF NOT EXISTS user (
            user_id INT AUTO_INCREMENT,
            user_name VARCHAR(255) NOT NULL,
            user_password VARCHAR(255) NOT NULL,
            PRIMARY KEY (user_id)        
            )`;        

        //  Orders table
    let orders = `CREATE TABLE IF NOT EXISTS orders (
        order_id INT AUTO_INCREMENT,
        product_id INT(11) NOT NULL,
        user_id INT(11) NOT NULL,
        PRIMARY KEY (order_id),
        FOREIGN KEY (product_id) REFERENCES products (product_id),
        FOREIGN KEY (user_id) REFERENCES user (user_id)
        )`;

 

    connection.query(products , (err) => {
        if (err){
            console.log(err);
        }
    });

    connection.query(product_description , (err)  => {
        if (err){
            console.log(err);
        }
    });

    connection.query(product_price , (err) => {
        if (err){
            console.log(err);
        }
    });

    connection.query(user , (err) => {
        if (err){
            console.log(err);
        }
    });

    connection.query(orders , (err ) => {
        if (err){
            console.log(err);
        }
    });

  
    res.send("Table created successfully")
});

// Insert data 

app.post("/addiphones" , (req, res) => {
    const {productName,productURL, briefDescription, productDescription, productIMG, productLINK, startingPrice, priceRange } = req.body;
    // console.log(req.body);    

    let insetProducts = "INSERT INTO products (product_url, product_name) VALUES (?,?)";
    let insetProductDescription = "INSERT INTO description  (product_id ,product_brief_description, product_description , product_img , product_link ) VALUES (? , ? , ? , ? , ?)";
    let insertPrice = "INSERT INTO productprice (product_id, starting_price, price_range ) VALUES (?, ? ,?)";

    connection.query(insetProducts , [productName,productURL], (error , result) => {
        if (error){
            console.log(error);
            } else {
                let id = result.insertId;
                connection.query(insetProductDescription , [id, briefDescription, productDescription, productIMG, productLINK], (error) => {
                    console.log(error);
                })
            connection.query(insertPrice, [id , startingPrice , priceRange], (error) => {
                console.log(error);
        }
    )
    }
})
res.send("Successfully inserted")
console.log("Successfully inserted");
})

//  Get data

app.get("/iphones", (req, res) => {
    connection.query()
})

// Listening server
app.listen(3025, () => {
    console.log("Server is listening! http://localhost:3025");
});
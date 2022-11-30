# BackendAssignment

I have defined 3 schemas for the 3 api calls required for the E-commerce website.
- The first one: productStatus will keep a track of items which are either added to cart or bought. So it will store the username, productname and quantity of each product. Along with that it will also store the userId and productId which is unique. 

- The second one: products will keep a track of products available. The admin can edit information like name and quantity of the product and can also delete and add the products.

- The third one: delivery used to keep a track of items sent for delivery. It will have a unique deliveryId and status of the order.

# How to run

- Run cp .env.example .env and add all the relevant environment key-value pairs.
- Run npm install && npm start to start the server.
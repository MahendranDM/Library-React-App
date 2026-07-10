import React, { useState } from "react";
import NavBar from "./NavBar";

const ViewBook = () => {
  const [data] = useState([
    {
      name: "The Great Gatsby",
      avatar:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop&q=60",
      auth: "F. Scott Fitzgerald",
      price: "1400",
    },
    {
      name: "To Kill a Mockingbird",
      avatar:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&auto=format&fit=crop&q=60",
      auth: "Harper Lee",
      price: "1200",
    },
    {
      name: "1984",
      avatar:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop&q=60",
      auth: "George Orwell",
      price: "1000",
    },
    {
      name: "The Catcher in the Rye",
      avatar:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&auto=format&fit=crop&q=60",
      auth: "J.D. Salinger",
      price: "1500",
    },
    {
      name: "The Hobbit",
      avatar:
        "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=400&auto=format&fit=crop&q=60",
      auth: "J.R.R. Tolkien",
      price: "1900",
    },
    {
      name: "Fahrenheit 451",
      avatar:
        "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400&auto=format&fit=crop&q=60",
      auth: "Ray Bradbury",
      price: "1100",
    },
    {
      name: "Pride and Prejudice",
      avatar:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&auto=format&fit=crop&q=60",
      auth: "Jane Austen",
      price: "900",
    },
    {
      name: "Brave New World",
      avatar:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&auto=format&fit=crop&q=60",
      auth: "Aldous Huxley",
      price: "1300",
    },
    {
      name: "Moby Drake",
      avatar:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&auto=format&fit=crop&q=60",
      auth: "Herman Melville",
      price: "1200",
    },
    {
      name: "The Odyssey",
      avatar:
        "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=400&auto=format&fit=crop&q=60",
      auth: "Homer",
      price: "899",
    },
  ])

  return (
    <div>
      <NavBar />

      <div className="container mt-4">
        <div className="row g-4">
          {data.map((value, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="card h-100">
                <img
                  src={value.avatar}
                  alt={value.name}
                  className="card-img-top"
                  height="300"
                  style={{ objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5 className="card-title">{value.name}</h5>
                  <p className="card-text text-muted">
                    Author: {value.auth}
                  </p>
                  <p className="card-text fw-bold">
                    Price: {value.price}
                  </p>

                  <button className="btn btn-primary w-100">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewBook;
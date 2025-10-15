import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Checkout() {
  // We get the items from the cart to show a summary.
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // calculating total price of all items

  function calculateTotal() {
    const res = cartItems
      .reduce((total, i) => {
        return (total = total + i.price * i.quantity);
      }, 0)
      .toFixed(2);

    return res;
  }

  // The assignment requirement: to display a message and empty the cart.
  function handlePlaceOrder() {
    alert("Order placed successfully!");
    // Navigate the user back to the home page.
    navigate("/");
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* This is the order summary section. */}
        <div className="md:w-1/2 p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          {cartItems.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <ul className="space-y-2">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <span>{item.title} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 pt-4 border-t border-gray-300 font-bold flex justify-between">
            <span>Total:</span>
            <span>${calculateTotal()}</span>
          </div>
        </div>
        
        {/* This is the dummy form for user details. */}
        <div className="md:w-1/2 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>
          <form onSubmit={(e) => { e.preventDefault(); handlePlaceOrder(); }}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Full Name</label>
              <input type="text" id="name" className="w-full mt-1 p-2 border rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700">Address</label>
              <textarea id="address" className="w-full mt-1 p-2 border rounded-md" rows="3" required></textarea>
            </div>
            {/* The "Place Order" button. It will use a type of submit to trigger our form's onSubmit event. */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
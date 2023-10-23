// Open order modal when the order button is clicked
document.getElementById('orderBtn').addEventListener('click', function() {
    $('#orderModal').modal('show');
  });
  
  // Handle form submission
  document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get user input values
    const foodItem = document.getElementById('foodItem').value;
    const quantity = document.getElementById('quantity').value;
    
    // Display order confirmation
    alert(`Order Placed!\nFood Item: ${foodItem}\nQuantity: ${quantity}`);
    
    // Close the modal
    $('#orderModal').modal('hide');
  });
  
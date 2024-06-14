import { API_URL } from "@/constants";

export async function userparse(Email:any, Password:any){


// Define the data you want to send
  const data = {
      Email: Email,
      Password: Password
    };

    // Convert the data object into a JSON string
    const jsonData = JSON.stringify(data);
    
    // Perform the POST request
    fetch(API_URL+"/user", {
      method: 'POST', // Specify the method
      headers: {
        'Content-Type': 'application/json', // Specify the content type as JSON
      },
      body: jsonData, // Attach the JSON data as the request body
    })
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
      console.log('Success:', data); // Handle success
    })
    .catch((error) => {
      console.error('Error:', error); // Handle errors
    });
}
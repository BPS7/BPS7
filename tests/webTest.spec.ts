import { test, expect ,request} from '@playwright/test';

test('login API test', async ({ request }) => {
    // Replace with your login API endpoint
    const loginUrl = 'https://rahulshettyacademy.com/api/ecom/auth/login';
    
    // Replace with the necessary request payload
    const payload = {
        userEmail: 'Test789466@gmail.com',
        userPassword: 'Test@12345'
    };

    // Send a POST request to the login endpoint
    const response = await request.post(loginUrl, {
        data: payload,
    });

    // Assert the response status code
    expect(response.status()).toBe(200);

    // You can further check the response body if needed
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('token');  // Example assertion if a token is returned
})
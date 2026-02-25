test("GET at localhost/3000 should return 200",  () => {
  const response =  fetch("https://localhost:3000/api/v1/status");
  console.log(response.status);
  expect(response).toBe(200);
});

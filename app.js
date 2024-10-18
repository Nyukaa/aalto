const handleRequest = (request) => {
  const url = new URL(request.url);
  const params = url.searchParams;
  let message = "Invalid parameters"
  const operation = params.get("operation")

  const number1 = Number(params.get("number1"));
  const number2 = Number(params.get("number2"));
  if (operation === "product"){
    message = number1*number2;
  } 
  else if (operation === "sum") {
    message = number1+number2;
  }

  return new Response(message);
 
};

Deno.serve(handleRequest);

const data = [
    {
      "email": "torik@gmail.com",
      "conversation": "[{\r\n    \"role\":\"user\", \"content\":\"what is html?\"\r\n}\r\n\r\n,{\r\n    \"role\":\"assitance\",\"content\":\"Html stand for Hyper Text Marup language\"\r\n},\r\n{\r\n    \"role\":\"user\", \"content\":\"what is css?\"\r\n\r\n},{\r\n    \"role\":\"assitance\",\"content\":\"css stand casecasding style sheet\"\r\n}]"
    },
    {
      "email": null,
      "conversation": "[{\r\n    \"role\":\"user\", \"content\":\"what is html?\"\r\n}\r\n\r\n,{\r\n    \"role\":\"assitance\",\"content\":\"Html stand for Hyper Text Marup language\"\r\n},\r\n{\r\n    \"role\":\"user\", \"content\":\"what is css?\"\r\n\r\n},{\r\n    \"role\":\"assitance\",\"content\":\"css stand casecasding style sheet\"\r\n}]"
    },
    {
      "email": "user@example.com",
      "conversation": "[{\"role\":\"user\",\"content\":\"what is html?\"},{\"role\":\"assitance\",\"content\":\"Html stand for Hyper Text Marup language\"},{\"role\":\"user\",\"content\":\"what is css?\"},{\"role\":\"assitance\",\"content\":\"css stand casecasding style sheet\"}]"
    },
    {
      "email": "jim@example.com",
      "conversation": "[{\"role\":\"user\",\"content\":\"what is javascript?\"},{\"role\":\"assitance\",\"content\":\"js is a programming language\"},{\"role\":\"user\",\"content\":\"what is mongodb?\"},{\"role\":\"assitance\",\"content\":\"Mongodb is a databse to store data\"}]"
    }
  ];
  
  // Iterate through the data and parse the 'conversation' field
  const parsedData = data.map(item => ({
    email: item.email,
    conversation: JSON.parse(item.conversation)
  }));
  
  console.log(parsedData[0].conversation);
  
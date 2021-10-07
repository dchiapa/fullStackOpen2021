const { request, response } = require("express");
const express = require("express");
const app = express();

let contacts = [
  {
    name: "Arto Hellas",
    phone: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    phone: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    phone: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    phone: "39-23-6423122",
    id: 4,
  },
  {
    name: "Diego",
    phone: "1234",
    id: 5,
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Phonebook</h1>");
});

app.get("/info", (request, response) => {
  response.send(
    `<p>Phonebook has info for ${contacts.length} people</p>
    <p>${new Date()}</p>`
  );
});

app.get("/api/contacts", (request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(contacts));
});

app.get("/api/contacts/:id", (request, response) => {
  const id = Number(request.params.id);
  const contact = contacts.find((contact) => contact.id === id);
  if (contact) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(contact));
  } else {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: "Contact not found" }));
  }
});

app.delete("/api/contacts/:id", (request, response) => {
  const id = Number(request.params.id);
  const contact = contacts.find((contact) => contact.id === id);
  if (contact) {
    contacts = contacts.filter((contact) => contact.id !== id);
    response.writeHead(204, { "Content-Type": "application/json" });
    response.end();
  } else {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: "Contact not found" }));
  }
});

app.post("/api/contacts", (request, response) => {
  const maxId =
    contacts.length > 0
      ? Math.max(...contacts.map((contact) => contact.id))
      : 0;
  const body = request.body;
  if (!body.name || !body.phone) {
    response.writeHead(400, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: "name or phone missing" }));
  } else {
    if (contacts.find((contact) => contact.name === body.name)) {
      response.writeHead(400, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ error: "name already exists" }));
    } else {
      const contact = {
        name: body.name,
        phone: body.phone,
        id: Math.floor(Math.random() * (2000 - maxId) + maxId),
      };
      contacts = contacts.concat(contact);
      response.writeHead(201, { "Content-Type": "application/json" });
      response.end(JSON.stringify(contact));
    }
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

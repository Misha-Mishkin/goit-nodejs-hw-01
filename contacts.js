const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.resolve("./db/contacts.json");

function listContacts() {
    async () => {
      try {
          const listContacts = await fs.readFile(contactsPath, 'utf-8')
          console.log(listContacts);
      } catch (error) {
        console.log(error);
      }
  }
}

// function getContactById(contactId) {
//   // ...твой код
// }

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }

module.exports = {
  listContacts,
//   getContactById,
//   removeContact,
//   addContact,
};

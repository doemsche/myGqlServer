
const typeDefinitions = `

type Customer{
  CustomerID: String
  CompanyName: String
  ContactName: String
  Country: String
}

type Query {
  customer( CustomerID: String, CompanyName: String, Country: String ): Customer
}


schema {
  query: Query
}
`;
// const typeDefinitions = `

// type Author{
//   id: Int
//   firstName: String
//   lastName: String
//   posts: [Post]
// }

// type Post {
//   id: Int
//   title: String
//   text: String
//   views: Int
//   author: Author
// }

// type Query {
//   author( firstName: String, lastName: String ): Author
// }

// schema {
//   query: Query
// }
// `;

export default [typeDefinitions];

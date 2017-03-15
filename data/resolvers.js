import { Customer, View } from './connectors';

const resolvers = {
  Query: {
    customer(_,args){
      return Customer.findOne({});
    }
  }
  // Query: {
  //   author(_, args){
  //     return Author.find({ where: args })
  //   }
  // },
  // Author: {
  //   posts(author){
  //     return author.getPosts();
  //   }
  // },
  // Post: {
  //   author(post){
  //     return post.getAuthor();
  //   },
  //   views(post){
  //     return View.findOne({postId: post.id}).then((v)=>v.views);
  //   }
  // }
}

export default resolvers
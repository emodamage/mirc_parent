import Mock from 'mockjs'
// const info =   {
//   name: 'zyx',
//   age: 18
// }
// export default {
//   info
// }

export default {
  name: 'zyx',
  age: 18,
  list: [
    Mock.mock({
    "string|1-10": "★"
    }),
    Mock.mock('@ctitle')
  ]
}

// export default {
//   getMessage: () => {
//     return {
//       name: 'zyx',
//       age: 18
//     }
//   }
// }

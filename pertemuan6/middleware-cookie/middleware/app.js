export default function({store, redirect}){
    if(!store.state.tes.authenticated){
        return redirect('/login')
    }
}
// const express = require('express')
// const app = express()
// const port = 3000;

// app.use((req, res, next) => {
//     console.log('Time:', Date.now())
//     next()
//   });
//   app.use('/login', (req, res) => {
//     <Nuxt />
//   });
//   app.use((req, res, ) => {
//     <Nuxt />
//   });
//   app.use((req, res) => {
//     res.status(404);
//     res.send('<center><h4>404</h4></center');
//   });
// app.listen(port, () => {
//     console.log('Example app listening at http://localhost:${port}');
// });
export default defineEventHandler(async()=> {
   
    return[{
        id: 1,
        title: "Learn Nuxt",
        done: false,
    },
    {
        id: 2,  
        title: "Learn Vue",
        done: false,    
    }]

})
// export default defineEventHandler(async(event)=> {
//     await new Promise((resolve ) => setTimeout(resolve, 2000))
//     // Simulate a delay of 1 second
//     return sendError(event, createError({
//         statusCode:500,
//         statusMessage:'oh no!',
//     }))
//     return[{
//         id: 1,
//         title: "Learn Nuxt",
//         done: false,
//     },
//     {
//         id: 2,  
//         title: "Learn Vue",
//         done: false,    
//     }]

// })
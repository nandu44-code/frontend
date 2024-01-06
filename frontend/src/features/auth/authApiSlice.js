import {apiSlice} from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: buider=>({

        login: builder.mutation({
            query: credentials =>({
                url:'/auth',
                method:'POST',
                body:{...credentials}
            })
        }),
    })
    
})


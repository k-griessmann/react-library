import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        author: "author",
        length: "length",
        type: "type",
        id: "id",
        isbn: "isbn",
        title: "title",
    },
    reducers: {
        chooseAuthor: (state, action) => { state.author = action.payload},
        chooseLength: (state, action) => { state.length = action.payload},
        chooseType: (state, action) => { state.type = action.payload},
        chooseId: (state, action) => { state.id = action.payload},
        chooseIsbn: (state, action) => { state.isbn = action.payload},
        chooseTitle: (state, action) => { state.title = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseAuthor, chooseLength, chooseType, chooseId, chooseIsbn, chooseTitle} = rootSlice.actions
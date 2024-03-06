// @ts-ignore
import { useSubmit } from "react-router-dom"
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseAuthor, chooseLength, chooseType, chooseId, chooseIsbn, chooseTitle } from "../redux/slices/RootSlice"


interface BookFormProps {
    id?: string[]
    onClose: () => void;
    }

    const BookForm = ( props:BookFormProps) => {
        const { register, handleSubmit } = useForm({})
        const dispatch = useDispatch();
        const store = useStore();
  
    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 1000);
            event.target.reset()
        } else {
            dispatch(chooseAuthor(data.author));
            dispatch(chooseLength(data.length));
            dispatch(chooseType(data.type));
            dispatch(chooseId(data.id));
            dispatch(chooseIsbn(data.isbn));
            dispatch(chooseTitle(data.title));

            server_calls.create(store.getState())
            setTimeout(() => {window.location.reload()}, 1000);
            event.target.reset()

            props.onClose();
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="isbn">ISBN</label>
                    <Input {...register('isbn')} name='isbn' placeholder="ISBN" />
                </div>
                <div>
                    <label htmlFor="title">Book Title</label>
                    <Input {...register('title')} name='title' placeholder="Title" />
                </div>
                <div>
                    <label htmlFor="author">Author Name</label>
                    <Input {...register('author')} name='author' placeholder="Author" />
                </div>
                <div>
                    <label htmlFor="length">Book Length</label>
                    <Input {...register('length')} name='length' placeholder="length" />
                </div>
                <div>
                    <label htmlFor="cover_type">Cover Type</label>
                    <Input {...register('type')} name='type' placeholder="Hardcover/Paperback" />
                </div>
                <div className="flex p-1">
                    <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                    >
                    Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default BookForm
import { createClient } from "@supabase/supabase-js";
import React from "react";
import { StyledRegisterVideo } from "./styles";

function userForm(formProps) {
    const [values, setValues] = React.useState(formProps.initialValues);

    return {
        values, 
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name
            setValues({
                ...values,
                [name]: value
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

const PROJECT_URL = "https://knqzqperjebhxhfpkajn.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtucXpxcGVyamViaHhoZnBrYWpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNTQ1NDQsImV4cCI6MTk4MzczMDU0NH0.mOoNS6SEa4s1ARoQkXITUJX8hj2hBYDC05uOFAfFhpA";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

export default function RegisterVideo() {
    const formRegister = userForm({
        initialValues: { title: "Fiona Apple - Relay (Official Audio)", url: "https://www.youtube.com/watch?v=OI1KfJTrixQ", playlist: "Music" }
    });
    const [visibleForm, setVisibleForm] = React.useState(false);

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setVisibleForm(true)}>
                +
            </button>
            {visibleForm
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                        console.log(formRegister.values);

                        supabase.from("video").insert({
                            title: formRegister.values.title,
                            url: formRegister.values.url,
                            thumb: getThumbnail(formRegister.values.url),
                            playlist: formRegister.values.playlist,
                        })
                        .then((wasupFools) => {
                            console.log(wasupFools)
                        })
                        .catch((err) => {
                            console.log(err)
                        })

                        setVisibleForm(false);
                        formRegister.clearForm();
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setVisibleForm(false)}>
                                X
                            </button>
                            <input
                                placeholder="Titulo do Video"
                                name="title"
                                values={formRegister.values.title}
                                onChange={formRegister.handleChange}
                            />
                            <input 
                                placeholder="URL" 
                                name="url"
                                values={formRegister.values.url} 
                                onChange={formRegister.handleChange}
                            />
                            <input 
                                placeholder="Playlist" 
                                name="playlist"
                                values={formRegister.values.playlist} 
                                onChange={formRegister.handleChange}
                            />
                            <button type="submit">
                                <strong>Enviar Video</strong>
                            </button>
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo >
    )
}
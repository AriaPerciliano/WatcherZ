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

export default function RegisterVideo() {
    const formRegister = userForm({
        initialValues: { title: "", url: "" }
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
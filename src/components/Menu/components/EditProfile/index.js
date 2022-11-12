import React from "react";
import { StyledEditProfile } from "./styles";

function userForm(formProps) {
    const [values, setValues] = React.useState(formProps.initialValues);

    return {
        values,
        handleChange: (evento) => {
            console.log(evento.target);
            const value = evento.target.value;
            const name = evento.target.name
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

export default function EditProfile() {
    const registerForm = userForm({
        initialValues: { github: "", job: "" }
    });
    /*const [visibleForm, setVisibleForm] = React.useState(false);

    return (
        <StyledEditProfile>
            <button className="edit-profile" onClick={() => setVisibleForm(true)}>
                Editar Perfil
            </button>
            {visibleForm
            ? (
                <form onSubmit={(evento) => {
                    evento.preventDefault();
                    console.log(values);
                }}>
                    <div>
                        <button className="close-modal" onClick={() => setVisibleForm(false)}>
                            X
                        </button>
                        <input 
                            placeholder="Github"
                            name="github"
                            value={registerForm.values.github} 
                            onChange={registerForm.handleChange}
                        />
                        <input 
                            placeholder="Titulo/Cargo"
                            name="job"
                            value={registerForm.values.job} 
                            onChange={registerForm.handleChange}
                        />
                        <button type="submit">
                            Confirmar
                        </button>
                    </div>
                </form>
            ) : false}
        </StyledEditProfile>
    )*/
}
import react from 'react'
import { TextField, Button, Select, InputLabel, FormControl } from '@mui/material'


const Formulario = () => {

    return (
        <div>
            <h3>prueba2</h3>
            <form>
                <TextField id="outlined-basic" label="Nombre" variant="outlined" />
                <TextField id="filled-basic" label="Nombre" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />

            </form>
        </div>
    )

}
export default Formulario
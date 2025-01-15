import { useState, useEffect } from 'react';

import { TextField, Button } from '@mui/material'
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import tiendas from './tiendas';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import "./formulario.css"

const Formulario = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        tienda: '',
        fecha: null,
        archivo: null
    })



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleDateChange = (newDate) => {
        setFormData({ ...formData, fecha: newDate })
    }
    const handleFileChange = (e) => {
        setFormData({ ...formData, archivo: e.target.files[0] })
    }

    const handleSubmit = () => {
        console.log(formData)
        console.log("hola")
        // const formDataToSend = new formData();
        // formDataToSend.append('nombre', formData.nombre)
        // formDataToSend.append('tienda', formData.tienda)
        // formDataToSend.append('tienda', formData.fecha)
        // formDataToSend.append('tienda', formData.archivo)

        // console.log("formDataToSend: ", formDataToSend)


    }

    // useEffect(() => {
    //     console.log(formData)
    //     console.log("datos", formData)

    // })

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    return (
        <div className='formulario'>
            <div className='frame-global'>
                <div className="image-logo">
                    <img
                        className="logo-transparente"
                        alt="Logo transparente"
                        src={"https://res.cloudinary.com/dswfd3z0p/image/upload/v1728070637/logo_transparente_ijvtns.png"}
                    />
                </div>
            </div>
            <Stack
                spacing={3}
                sx={{
                    width: '100%',
                    maxWidth: 500,
                    margin: '0 auto',
                    padding: '50px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#fff',
                    mt: 0,
                }}
            >

                <h1 className='poppins-regular'>Actualizar orden de compra</h1>
                <TextField id="outlined-basic" label="Nombre" variant="outlined" name="nombre" value={formData.nombre} onChange={handleChange} />

                <Autocomplete
                    disablePortal
                    options={tiendas}
                    sx={{
                        width: '100%',
                        maxWidth: 600
                    }}
                    renderInput={(params) => <TextField {...params} label="Tienda"
                        onChange={(event, newValue) => { setFormData(...formData, { tienda: newValue }) }}

                    />}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker
                            value={formData.fecha}
                            onChange={handleDateChange}
                            label="Fecha" sx={{
                                width: '100%',
                                maxWidth: 600
                            }} />
                    </DemoContainer>
                </LocalizationProvider>
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    sx={{
                        width: '100%', height: '150px',
                        border: '1px dashed #8f858c', backgroundColor: 'rgba(192, 159, 176, 0.09)', color: 'rgba(231, 49, 143, 0.37)', display: 'flex',
                        flexDirection: 'column', justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center', cursor: 'pointer', textTransform: 'none'
                    }}

                >
                    Subir Archivos - facturas
                    <VisuallyHiddenInput
                        type="file"
                        onChange={handleFileChange}
                        multiple
                    />
                </Button>
                <Stack direction="row" spacing={2} justifyContent="center">
                    <Button onClick={handleSubmit} variant="contained" sx={{ backgroundColor: '#d651b7', color: '#fff', '&:hover': { backgroundColor: '#a6358b' } }}>
                        Enviar
                    </Button>
                </Stack>
                <div>Nunca envíes contraseñas ni información de tarjetas de crédito por los WorkForms</div>

            </Stack>



        </div>
    )

}
export default Formulario
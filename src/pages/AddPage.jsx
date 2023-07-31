import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addContact } from '../utils/data'
import ContactInput from '../components/ContactInput'

const AddPage = () => {
    const navigate = useNavigate()

    const onAddContactHandler = (contact) => {
        addContact(contact)
        navigate('/')
    }

    return (
        <section>
            <h2>Tambah Kontak</h2>
            <ContactInput
                addContact={onAddContactHandler}
            />
        </section>
    )
}

export default AddPage

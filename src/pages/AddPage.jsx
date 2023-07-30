import React from 'react'
import { addContact } from '../utils/data'
import ContactInput from '../components/ContactInput'

const AddPage = () => {
    const onAddContactHandler = (contact) => {
        addContact(contact)
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

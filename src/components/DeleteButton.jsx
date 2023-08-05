// eslint-disable-next-line no-unused-vars
import React from "react"
import PropTypes from "prop-types"
import { FiDelete } from "react-icons/fi"

const DeleteButton = ({ id, onDelete }) => {
    return <button className="contact-item__delete" onClick={() => onDelete(id)}><FiDelete /></button>
}

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DeleteButton

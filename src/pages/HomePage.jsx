import React from 'react'
import { useSearchParams } from 'react-router-dom'
import ContactList from '../components/ContactLIst'
import SearchBar from '../components/SearchBar'
import { deleteContact } from '../utils/data'
import { getContacts } from '../utils/api'

const HomePageWrapper = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const keyword = searchParams.get('keyword')

    const changeSearchParams = (keyword) => {
        setSearchParams({ keyword })
    }

    return (
        <HomePage
            defaultKeyword={keyword}
            keywordChange={changeSearchParams}
        />
    )
}

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            contacts: [],
            keyword: props.defaultKeyword || '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this)
    }

    async componentDidMount() {
        const { data } = await getContacts()

        this.setState(() => {
            return {
                contacts: data
            }
        })
    }

    onDeleteHandler(id) {
        deleteContact(id)

        // update the contact state from data.js
        this.setState(() => {
            return {
                contacts: getContacts(),
            }
        })
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        })

        this.props.keywordChange(keyword)
    }

    render() {
        const contacts = this.state.contacts.filter((contact) => {
            return contact.name.toLowerCase().includes(this.state.keyword.toLowerCase())
        })

        return (
            <section>
                <SearchBar
                    keyword={this.state.keyword}
                    keywordChange={this.onKeywordChangeHandler}
                />
                <h2>Daftar Kontak</h2>
                <ContactList
                    contacts={contacts}
                    onDelete={this.onDeleteHandler}
                />
            </section>
        )
    }
}

export default HomePageWrapper

import { useState } from 'react'
import type { FormEvent } from 'react'
import Button from '../Button/Button'
import './SearchBar.css'

type SearchBarProps = {
  placeholder: string
  buttonLabel: string
  onSearch?: (query: string) => void
}

function SearchBar({ placeholder, buttonLabel, onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSearch?.(query.trim())
  }

  return (
    <form className="search-bar" role="search" onSubmit={handleSubmit}>
      <input
        type="search"
        className="search-bar__input"
        placeholder={placeholder}
        aria-label={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <Button type="submit" className="search-bar__button">
        {buttonLabel}
      </Button>
    </form>
  )
}

export default SearchBar

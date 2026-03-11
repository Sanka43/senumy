import { useRef, useState, useMemo, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LOGO_SRC } from '../lib/assets'
import { HOME_CATEGORIES, getCardHref } from '../data/homeCards'
import type { HomeCard } from '../data/homeCards'
import { isPremiumUser } from '../lib/validation'

type SearchCard = HomeCard & { category: string }

const ALL_CARDS: SearchCard[] = HOME_CATEGORIES.flatMap((cat) =>
  cat.cards.map((card) => ({ ...card, category: cat.title }))
)

function searchByTitle(query: string): SearchCard[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return ALL_CARDS.filter((card) => card.title.toLowerCase().includes(q)).slice(0, 10)
}

const DROPDOWN_ID = 'navbar-search-results'
const RESULT_ID_PREFIX = 'navbar-search-result-'

export default function NavBar() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const results = useMemo(() => searchByTitle(query), [query])
  const showDropdown = focused && query.trim().length > 0

  const handleSelect = useCallback(
    (card: SearchCard) => {
      const href = getCardHref(card, isPremiumUser())
      const isExternal = href.startsWith('http')
      if (isExternal) {
        window.open(href, '_blank', 'noopener,noreferrer')
      } else {
        navigate(href)
      }
      setQuery('')
      setFocused(false)
      setHighlightedIndex(-1)
      inputRef.current?.blur()
    },
    [navigate]
  )

  const setHighlighted = useCallback(
    (index: number) => {
      setHighlightedIndex(Math.max(-1, Math.min(index, results.length - 1)))
    },
    [results.length]
  )

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown) {
      if (e.key === 'ArrowDown' && query.trim().length > 0) {
        setFocused(true)
        setHighlightedIndex(0)
        e.preventDefault()
      }
      return
    }
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setHighlighted(highlightedIndex + 1)
        break
      case 'ArrowUp':
        e.preventDefault()
        if (highlightedIndex <= 0) {
          setHighlightedIndex(-1)
        } else {
          setHighlighted(highlightedIndex - 1)
        }
        break
      case 'Enter':
        e.preventDefault()
        if (highlightedIndex >= 0 && results[highlightedIndex]) {
          handleSelect(results[highlightedIndex])
        }
        break
      case 'Escape':
        e.preventDefault()
        setFocused(false)
        setHighlightedIndex(-1)
        inputRef.current?.blur()
        break
      default:
        break
    }
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-10 flex h-[var(--nav-height)] min-h-[56px] items-center justify-between gap-3 border-b px-5 backdrop-blur-xl"
      style={{
        paddingTop: 'max(env(safe-area-inset-top), 8px)',
        backgroundColor: 'var(--glass-fill)',
        borderBottomColor: 'var(--glass-border)',
        WebkitBackdropFilter: 'blur(24px)',
      }}
    >
      <Link
        to="/"
        className="flex min-h-[44px] min-w-[44px] shrink items-center justify-start"
        aria-label="Senumy home"
      >
        <img
          src={LOGO_SRC}
          alt="Senumy"
          className="h-[36px] w-auto max-w-[120px] object-contain object-left"
        />
      </Link>

      <div className="relative ml-2 mb-2 mr-2 flex min-w-0 flex-1 max-w-[200px]">
        <div
          className="flex h-9 items-center gap-3 border-b transition-colors duration-200"
          style={{
            borderBottomColor: focused ? 'var(--glass-border-focus)' : 'var(--glass-border)',
            borderBottomWidth: '1px',
          }}
        >
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setHighlightedIndex(-1)
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 150)}
            onKeyDown={onKeyDown}
            placeholder="Search anything..."
            className="min-w-0 flex-1 bg-transparent py-1.5 text-[15px] placeholder-[var(--text-tertiary)] focus:outline-none"
            style={{ color: 'var(--text-primary)' }}
            aria-label="Search apps by title"
            aria-expanded={showDropdown}
            aria-controls={showDropdown ? DROPDOWN_ID : undefined}
            aria-autocomplete="list"
            aria-activedescendant={
              showDropdown && highlightedIndex >= 0 ? `${RESULT_ID_PREFIX}${highlightedIndex}` : undefined
            }
            autoComplete="off"
          />
          <span className="shrink-0 text-[var(--text-tertiary)]" aria-hidden>
            <SearchIcon />
          </span>
        </div>

        {showDropdown && (
          <div
            ref={dropdownRef}
            id={DROPDOWN_ID}
            role="listbox"
            aria-label="Search results"
            className="absolute left-0 right-0 top-full z-20 mt-2 max-h-[70vh] overflow-auto rounded-2xl border py-2 shadow-xl backdrop-blur-xl"
            style={{
              backgroundColor: 'var(--glass-fill)',
              borderColor: 'var(--glass-border)',
              boxShadow: '0 12px 40px -12px rgba(0,0,0,0.5), inset 0 1px 0 var(--glass-highlight)',
            }}
          >
            {results.length === 0 ? (
              <div className="flex flex-col items-center gap-2 px-4 py-6 text-center">
                <span className="text-[var(--text-tertiary)]" aria-hidden>
                  <SearchIcon />
                </span>
                <p className="text-sm text-[var(--text-secondary)]" role="status">
                  No apps match &quot;{query}&quot;
                </p>
              </div>
            ) : (
              <ul className="py-1" role="list">
                {results.map((card, index) => (
                  <li key={`${card.category}-${card.title}`} role="option" id={`${RESULT_ID_PREFIX}${index}`}>
                    <button
                      type="button"
                      tabIndex={-1}
                      onMouseDown={(e) => {
                        e.preventDefault()
                        handleSelect(card)
                      }}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      className={`flex w-full flex-col gap-0.5 px-4 py-3 text-left transition-colors ${
                        index === 0 ? 'rounded-t-xl' : ''
                      } ${index === results.length - 1 ? 'rounded-b-xl' : ''} ${
                        index === highlightedIndex ? 'bg-[var(--glass-fill-strong)]' : 'hover:bg-[var(--glass-fill-strong)]'
                      }`}
                    >
                      <span className="font-medium text-[var(--text-primary)]">{card.title}</span>
                      <span className="text-xs text-[var(--text-secondary)]">{card.category}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </header>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

import { useRef, useState, useMemo, useCallback, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LOGO_SRC } from '../lib/assets'
import { isDirectDownloadUrl } from '../lib/urls'
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
  const [searchExpanded, setSearchExpanded] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (searchExpanded) {
      const t = setTimeout(() => inputRef.current?.focus(), 0)
      return () => clearTimeout(t)
    }
  }, [searchExpanded])

  const results = useMemo(() => searchByTitle(query), [query])
  const showDropdown = focused && query.trim().length > 0

  const handleSelect = useCallback(
    (card: SearchCard) => {
      const href = getCardHref(card, isPremiumUser())
      const isExternal = href.startsWith('http')
      if (isExternal) {
        if (isDirectDownloadUrl(href)) {
          window.location.href = href
        } else {
          window.open(href, '_blank', 'noopener,noreferrer')
        }
      } else {
        navigate(href)
      }
      setQuery('')
      setFocused(false)
      setSearchExpanded(false)
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
        setSearchExpanded(false)
        setHighlightedIndex(-1)
        inputRef.current?.blur()
        break
      default:
        break
    }
  }

  return (
    <header
      className="fixed left-0 right-0 top-0 z-10 flex h-[var(--nav-height)] min-h-[72px] items-center justify-between gap-2 border-b px-3 backdrop-blur-[var(--glass-blur-strong)] sm:grid sm:grid-cols-[auto,1fr,auto] sm:justify-between sm:gap-3 sm:px-6"
      style={{
        paddingTop: 'max(env(safe-area-inset-top), 10px)',
        backgroundColor: 'rgba(8, 8, 12, 0.72)',
        borderBottomColor: 'var(--glass-border)',
        boxShadow: 'inset 0 1px 0 0 var(--glass-highlight-subtle)',
        WebkitBackdropFilter: 'blur(var(--glass-blur-strong))',
      }}
    >
      <Link
        to="/"
        className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-start"
        aria-label="Senumy home"
      >
        <img
          src={LOGO_SRC}
          alt="Senumy"
          className="h-9 w-auto max-w-[120px] object-contain object-left sm:h-11 sm:max-w-[180px]"
        />
      </Link>

      <div className="relative flex min-w-0 flex-1 justify-end sm:flex-initial sm:max-w-[180px] sm:justify-self-end">
        <div
          className="flex h-11 shrink-0 items-center justify-end overflow-hidden rounded-full border backdrop-blur-[var(--glass-blur)] transition-[width,min-width,border-color] duration-500 ease-in-out"
          style={{
            width: searchExpanded ? '100%' : '44px',
            minWidth: searchExpanded ? '120px' : undefined,
            borderColor: focused ? 'var(--glass-border-focus)' : 'var(--glass-border)',
            backgroundColor: 'var(--glass-fill)',
            boxShadow: 'inset 0 1px 0 0 var(--glass-highlight-subtle)',
            WebkitBackdropFilter: 'blur(var(--glass-blur))',
          }}
        >
          {!searchExpanded ? (
            <button
              type="button"
              className="flex h-11 w-11 shrink-0 items-center justify-center text-[var(--text-tertiary)] rounded-full hover:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--glass-border-focus)]"
              aria-label="Search"
              onClick={() => setSearchExpanded(true)}
            >
              <SearchIcon />
            </button>
          ) : (
            <>
              <span className="ml-2 flex h-full shrink-0 items-center justify-center text-[var(--text-tertiary)]" aria-hidden>
                <SearchIcon />
              </span>
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setHighlightedIndex(-1)
                }}
                onFocus={() => setFocused(true)}
                onBlur={() => {
                  setTimeout(() => {
                    setFocused(false)
                    setSearchExpanded(false)
                    setHighlightedIndex(-1)
                  }, 150)
                }}
                onKeyDown={onKeyDown}
                placeholder="Search..."
                className="h-full min-w-0 flex-1 bg-transparent px-2 pr-2 text-[14px] leading-none placeholder-[var(--text-tertiary)] focus:outline-none"
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
            </>
          )}
        </div>

        {showDropdown && (
          <div
            ref={dropdownRef}
            id={DROPDOWN_ID}
            role="listbox"
            aria-label="Search results"
            className="absolute left-0 right-0 top-full z-20 mt-2 max-h-[70vh] min-w-[200px] overflow-auto rounded-2xl border py-2 backdrop-blur-[var(--glass-blur-strong)] sm:min-w-0"
            style={{
              backgroundColor: 'rgba(18, 18, 26, 0.85)',
              borderColor: 'var(--glass-border)',
              boxShadow: 'var(--shadow-glass)',
              WebkitBackdropFilter: 'blur(var(--glass-blur-strong))',
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
                        index === highlightedIndex ? 'bg-[var(--glass-fill-strong)]' : 'hover:bg-[var(--glass-fill)]'
                      }`}
                    >
                      <span className="font-semibold text-[var(--text-primary)]">{card.title}</span>
                      <span className="text-xs text-[var(--text-secondary)]">{card.category}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <div className="hidden h-[44px] w-[44px] sm:block sm:w-[180px]" aria-hidden />
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

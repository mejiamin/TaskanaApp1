import { Icon } from '@/components'
import { useTaskData, useTaskUI } from '@/context'
import { useEffect, useRef, useState } from 'react'
import styles from './dropdown.module.css'

const options = [
  { id: 1, value: 'priorityAt', icon: 'fromUnimportant', label: 'Приоритету' },
  { id: 2, value: 'priority', icon: 'ofImportance', label: 'Приоритету' },
  { id: 3, value: 'az', icon: 'az', label: 'Алфавиту' },
  { id: 4, value: 'za', icon: 'za', label: 'Алфавиту' },
  { id: 5, value: 'createdAt', icon: 'oneThirtyOne', label: 'Дате создания' },
  { id: 6, value: 'created', icon: 'thirtyOneOne', label: 'Дате создания' },
  { id: 7, value: 'updatedAt', icon: 'newOld', label: 'Дате обновления' },
  { id: 8, value: 'updated', icon: 'oldNew', label: 'Дате обновления' },
]

export const Dropdown = () => {
  const { setSortType } = useTaskData()
  const { isEditorOpen } = useTaskUI()
  const [selected, setSelected] = useState(options[5])
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && !isEditorOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isEditorOpen])

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <button
        type='button'
        className={`${styles.trigger} ${isOpen ? styles.open : ''} md-semibold shadow-sm`}
        onClick={() => setIsOpen(prev => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Сортировка задач по ${selected.label.toLowerCase()}`}
      >
        <Icon name={selected.icon} />
        <h3 className='md-semibold'>По {selected.label.toLowerCase()}</h3>
        <Icon name='chevronBottom' />
      </button>

      <div
        role="listbox"
        aria-activedescendant={selected.value}
        className={`${styles.menu} ${isOpen ? styles.open : ''}`}
      >
        <h4 className='md-bold'><Icon name='filter' /> Сортировка по:</h4>
        <ul className={styles.dropdownItems}>
          {options.map(option => (
            <li
              key={option.id}
              className={styles.dropdownItem}
            >
              <button
                onClick={() => {
                  setSelected(option)
                  setSortType(option.value)
                  setIsOpen(false)
                }}
                className={`${styles.optionBtn} md-regular`}
              >
                <Icon name={option.icon} />
                {option.label}
                {selected.id === option.id && <Icon name='check' className={styles.check} />}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

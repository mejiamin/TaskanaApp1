import { Icon } from '@/components'
import styles from './button.module.css'
import { useState } from 'react'

export const Button = ({
  type = "button",
  icon,
  text,
  disabled = false,
  onClick,
  ariaLabel,
  className = '',
  loading = '',
  spin = ''
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    if (disabled || isLoading) return

    setIsLoading(true)
    try {
      onClick?.()
    } finally {
      setIsLoading(false)
    }
  }

  const buttonClass = `${styles.button} ${className} ${isLoading ? styles.loading : ''} ${isLoading ? loading || '' : ''}`

  const iconClass = `${styles.spin} ${spin}`

  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {isLoading
        ? (
          <div className={styles.loadingIcon}>
            <Icon name="loading" className={iconClass} />
          </div>
        )
        : (
          <>
            <Icon name={icon} /> {text}
          </>
        )
      }
    </button>
  )
}

import { Header, Content } from '@/components'
import { useTheme } from '@/context'
import styles from './appLayout.module.css'

export const AppLayout = ({ children }) => {
  const theme = useTheme()
  return (
    <div className={styles.layout} data-theme={theme.theme}>
      <Header />
      <Content>
        {children}
      </Content>
    </div >
  )
}

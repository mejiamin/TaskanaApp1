import { Footer, MainContainer, TaskList, Dropdown } from '@/components'
import styles from './incomingTasks.module.css'

export const IncomingTasks = () => {
  return (
    <section className={styles.incomingTasks}>
      <MainContainer labelledBy='incoming-title'>
        <header className={styles.title}>
          <h1 id='incoming-title' className='heading-h1'>Входящие</h1>
          <Dropdown />
        </header>
        <TaskList />
      </MainContainer>
      <Footer />
    </section>
  )
}

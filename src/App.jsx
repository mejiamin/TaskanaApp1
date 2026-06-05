import { ThemeProvider, TaskProvider } from '@/context'
import { AppLayout } from '@/layouts'
import { IncomingTasks } from '@/pages'

export function App() {
  return (
    <ThemeProvider>
      <TaskProvider>

        <AppLayout>
          <IncomingTasks />
        </AppLayout>

      </TaskProvider>
    </ThemeProvider>
  )
}

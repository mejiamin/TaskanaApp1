import { useMemo } from "react"
import { useTasks, useTaskEditor } from "@/hooks"
import { TaskDataContext, TaskUIContext } from "./taskContext"

export const TaskProvider = ({ children }) => {
  const taskData = useTasks()
  const taskUI = useTaskEditor()

  const dataValue = useMemo(() => taskData, [taskData])
  const uiValue = useMemo(() => taskUI, [taskUI])

  return (
    <TaskDataContext.Provider value={dataValue}>
      <TaskUIContext.Provider value={uiValue}>
        {children}
      </TaskUIContext.Provider>
    </TaskDataContext.Provider>
  )
}
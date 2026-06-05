import { Notebook } from "./illustrations/Notebook"
import { EmptyTask } from "./illustrations/EmptyTask"
import { Logo } from "./illustrations/Logo"

const ILLUSTRATIONS = {
  notebook: Notebook,
  emptyTask: EmptyTask,
  logo: Logo,
}

export const Illustration = ({ name }) => {
  const IllustrationComponent = ILLUSTRATIONS[name]
  if (!IllustrationComponent) return null
  return (
    <IllustrationComponent />
  )
}

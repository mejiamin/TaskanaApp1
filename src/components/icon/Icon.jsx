import { Inbox } from "./icons/Inbox"
import { Plus } from "./icons/Plus"
import { Sun } from "./icons/Sun"
import { Moon } from "./icons/Moon"
import { Loading } from "./icons/Loading"
import { ArrowTwo } from "./icons/ArrowTwo"
import { ChevronTop } from "./icons/ChevronTop"
import { Minus } from "./icons/Minus"
import { Edit } from "./icons/Edit"
import { Check } from "./icons/Check"
import { XMark } from "./icons/XMark"
import { ChevronBottom } from "./icons/ChevronBottom"
import { OneThirtyOne } from "./icons/OneThirtyOne"
import { ThirtyOneOne } from "./icons/ThirtyOneOne"
import { Az } from "./icons/Az"
import { Filter } from "./icons/Filter"
import { FromUnimportant } from "./icons/FromUnimportant"
import { NewOld } from "./icons/NewOld"
import { OfImportance } from "./icons/OfImportance"
import { OldNew } from "./icons/OldNew"
import { Trash } from "./icons/Trash"
import { Za } from "./icons/Za"

const ICONS = {
  inbox: Inbox,
  plus: Plus,
  sun: Sun,
  moon: Moon,
  loading: Loading,
  edit: Edit,
  check: Check,
  xMark: XMark,
  chevronBottom: ChevronBottom,
  arrowTwo: ArrowTwo,
  chevronTop: ChevronTop,
  minus: Minus,
  oneThirtyOne: OneThirtyOne,
  thirtyOneOne: ThirtyOneOne,
  az: Az,
  filter: Filter,
  fromUnimportant: FromUnimportant,
  newOld: NewOld,
  ofImportance: OfImportance,
  oldNew: OldNew,
  trash: Trash,
  za: Za,
}

export const Icon = ({ name, className }) => {
  const IconComponent = ICONS[name]
  if (!IconComponent) return null
  return (
    <IconComponent className={className} />
  )
}

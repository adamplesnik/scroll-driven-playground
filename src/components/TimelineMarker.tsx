import { HTMLAttributes } from 'react'
import { addWithSpace } from '../utils/addWithSpace'

const TimelineMarker = ({
  textStart = undefined,
  textEnd = undefined,
  className,
}: TimelineMarkerProps) => {
  return (
    <div
      className={
        'flex items-center gap-4 ' +
        // (showTechInfo ? 'opacity-100' : 'opacity-0') +
        addWithSpace(className)
      }
    >
      {textStart && <span className="font-mono text-sm font-semibold">{textStart}</span>}
      <div className="h-px flex-1 bg-current opacity-20"></div>
      {textEnd && <span className="font-mono text-sm">{textEnd}</span>}
    </div>
  )
}

export type TimelineMarkerProps = {
  textStart?: string | undefined
  textEnd?: string | undefined
} & HTMLAttributes<HTMLDivElement>

export default TimelineMarker
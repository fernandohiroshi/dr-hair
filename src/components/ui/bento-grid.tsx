import { cn } from '@/lib/utils'
import Link from 'next/link'

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return <div className={cn('mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3', className)}>{children}</div>
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  href,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  href?: string
}) => {
  return (
    <Link
      href={href || '#'}
      title="Saiba mais!"
      passHref
      className={cn(
        'group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl bg-stone-50/40 p-2 shadow-md transition duration-300 ease-in-out hover:bg-stone-50/80 hover:shadow-xl md:p-4',
        className,
      )}
    >
      {header}

      <div className="transition duration-300 ease-in-out group-hover/bento:translate-x-2">
        <div className="mb-2 flex items-center gap-2 font-semibold text-neutral-900">
          <div>{icon}</div>
          <div className="text-sm md:text-lg">{title}</div>
        </div>
        <div className="text-xs text-neutral-900 md:text-base">{description}</div>
      </div>
    </Link>
  )
}

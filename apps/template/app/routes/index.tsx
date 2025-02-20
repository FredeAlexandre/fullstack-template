import { createFileRoute } from '@tanstack/react-router'
import { cn } from '~/lib/utils'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className={cn('p-10')}>Hello World</div>
  )
}

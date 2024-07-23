import {Card, CardContent} from '../../../../src/components/ui/card'
import {AdjustBudgetCard} from '../../../../src/components/custom/AdjustBudgetCard'

export default function ImportPage() {
  return (
    <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
      <header className='top-0 flex items-center justify-center gap-4 static h-auto border-0 bg-transparent px-6'>
        <h1 className='text-5xl font-semibold leading-none tracking-tight'>Budget</h1>
      </header>
      <main className='flex-1 items-start p-4 px-6 py-0 gap-8 '>
        <Card className='w-full mx-auto max-w-3xl p-10'>
          <CardContent className='grid gap-6'>
            <h1 className='text-3xl font-semibold leading-none tracking-tight'>Ajust your budget</h1>
            <AdjustBudgetCard/>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

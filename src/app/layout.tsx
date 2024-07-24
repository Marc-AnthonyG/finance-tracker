import {Inter} from 'next/font/google'
import "@/styles/globals.css";
import {BarChart3, Calculator, Import, List} from 'lucide-react'
import {type ReactNode} from "react";
import NavbarLink from "@/components/custom/NavbarLink";
import {type Metadata} from "next";
import {TRPCReactProvider} from "@/trpc/react";
import {Toaster} from "@/components/ui/toaster";


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{rel: "icon", url: "/favicon.ico"}],
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en'>
    <body className={inter.className}>
    <TRPCReactProvider>
      <div className='flex min-h-screen w-full flex-col bg-muted/40'>
        <aside className='fixed inset-y-0 left-0 z-10 w-14 flex-col border-r bg-background flex'>
          <nav className='flex flex-col items-center gap-4 px-2 sm:py-5'>
            <NavbarLink link='Dashboard' href='#' icon={<BarChart3 className='h-5 w-5'/>}/>
            <NavbarLink link='Expenses' href='/transactions' icon={<List className='h-5 w-5'/>}/>
            <NavbarLink link='Import' href='/import' icon={<Import className='h-5 w-5'/>}/>
            <NavbarLink link='Budget' href='/budget' icon={<Calculator className='h-5 w-5'/>}/>
          </nav>
        </aside>
        {children}
        <Toaster/>
      </div>
    </TRPCReactProvider>
    </body>
    </html>
  )
}

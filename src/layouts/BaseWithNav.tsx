import { PropsWithChildren } from 'react'
import Nav from '../partials/Nav'

const BaseWithNav = ({ children }: PropsWithChildren<BaseWithNavProps>) => {
  return (
    <>
      <Nav className="fixed left-0 right-0 top-0 z-50" />
      {children}
    </>
  )
}

export type BaseWithNavProps = {
  children: PropsWithChildren
}

export default BaseWithNav

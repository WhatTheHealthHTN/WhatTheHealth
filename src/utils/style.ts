import type { Argument } from 'classnames'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

export const cx = (...classes: Argument[]) => twMerge(classNames(...classes))

export const primaryColor = '#FEC93A'
export const secondaryColor = '#E338F9'
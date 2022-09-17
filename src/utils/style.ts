import type { Argument } from 'classnames'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

export const cx = (...classes: Argument[]) => twMerge(classNames(...classes))

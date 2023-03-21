import { InputHTMLAttributes } from 'react'

import { Input } from './styles'

interface SearchFormProps extends InputHTMLAttributes<HTMLInputElement> {}

export function SearchForm(props: SearchFormProps) {
  return <Input {...props} />
}

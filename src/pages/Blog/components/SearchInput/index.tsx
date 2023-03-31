import { useForm } from 'react-hook-form'
import { InputForm, HeaderInput } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

interface SearchProps {
  loadPosts: (query?: string) => Promise<void>
  postsLength: number
}

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchInput({ loadPosts, postsLength }: SearchProps) {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInputs) {
    await loadPosts(data.query)
  }

  return (
    <InputForm onSubmit={handleSubmit(handleSearchPosts)}>
      <HeaderInput>
        <span>Publicações</span>
        <p>{postsLength} publicações</p>
      </HeaderInput>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </InputForm>
  )
}

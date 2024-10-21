import AccountForm from './account-form'
import { createClient } from '@/utils/supabase/server'
import {Demo} from '../Components/Demo'

export default async function Account() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <>
  <AccountForm user={user} />
  <Demo />
    </>
  )
}

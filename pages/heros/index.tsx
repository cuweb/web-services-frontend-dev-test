import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Hero } from '../../interfaces'
import { sampleUserData } from '../../utils/sample-data'
import List from '../../components/List'

type Props = {
  items: Hero[]
}

const WithStaticProps = ({ items }: Props) => (
  <>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Hero[] = sampleUserData
  return { props: { items } }
}

export default WithStaticProps

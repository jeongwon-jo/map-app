import Link from "next/link";
import { useRouter } from "next/router";

export default function Page() {
  const router =  useRouter()
  return (
    <div>
      <h1>page: {router.query.slug}</h1>
      <div>
        <button type="button" onClick={() => router.push({pathname: '/[slug]', query: {slug: 'push'}})}>PUSH</button>
      </div>
      <div className="mt-4">
        <button type="button" onClick={() => router.replace({pathname: '/[slug]', query: {slug: 'push'}})}>REPLACE</button>
      </div>
      <div className="mt-4">
        <button type="button" onClick={() => router.reload()}>RELOAD</button>
      </div>
      <div className="mt-4">
        <Link href="/hello" >HELLO</Link>
      </div>
      <div className="mt-4">
        <Link href="/bye" >BYE</Link>
      </div>
    </div>
  )
}
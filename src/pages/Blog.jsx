import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export function BlogIndex() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`${API}/blog`).then(r=>r.json()).then(setPosts)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-indigo-50 to-cyan-50">
      <Navbar />
      <section className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-slate-900">Insights & updates</h1>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(p => (
              <Link key={p.id} to={`/blog/${p.slug}`} className="rounded-2xl overflow-hidden bg-white border border-slate-200 hover:shadow-md transition-shadow">
                {p.image_url && <img src={p.image_url} alt="" className="h-40 w-full object-cover" />}
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-3">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch(`${API}/blog/${slug}`).then(r=>r.json()).then(setPost)
  }, [slug])

  if (!post) return null
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-indigo-50 to-cyan-50">
      <Navbar />
      <section className="pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-slate-200 rounded-2xl p-6">
          {post.image_url && <img src={post.image_url} alt="" className="rounded-lg" />}
          <h1 className="mt-4 text-3xl font-extrabold text-slate-900">{post.title}</h1>
          <p className="mt-2 text-sm text-slate-500">By {post.author || 'Team'} • {new Date(post.published_at).toLocaleDateString()}</p>
          <div className="prose prose-slate mt-6" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </section>
      <Footer />
    </div>
  )
}

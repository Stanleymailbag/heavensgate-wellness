'use client'

import { useState } from 'react'

export default function CommentSection({ postId, initialComments = [] }: { postId: string, initialComments: any[] }) {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState('')

  const addComment = () => {
    if (!newComment.trim()) return
    const comment = {
      id: Date.now().toString(),
      content: newComment,
      author: 'Anonymous',
      createdAt: new Date().toISOString(),
    }
    setComments([...comments, comment])
    setNewComment('')
    // In production, you'd POST to /api/comments
  }

  const deleteComment = (id: string) => {
    setComments(comments.filter(c => c.id !== id))
  }

  return (
    <div className="mt-8 pt-6 border-t border-slate-200">
      <h3 className="text-lg font-bold mb-4">Comments ({comments.length})</h3>
      <div className="space-y-3 mb-6">
        {comments.length === 0 && <p className="text-xs text-slate-500 italic">No comments yet. Be the first to share your thoughts.</p>}
        {comments.map((c) => (
          <div key={c.id} className="text-xs text-slate-600 italic flex justify-between">
            <span>{c.content} – {c.author}</span>
            <button onClick={() => deleteComment(c.id)} className="text-rose-500 text-[10px] ml-2">Delete</button>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="text-xs border rounded-lg px-2 py-1 flex-1"
        />
        <button onClick={addComment} className="bg-slate-200 text-xs px-3 rounded-lg">Post</button>
      </div>
    </div>
  )
}
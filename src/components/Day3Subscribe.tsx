'use client';

import { useState, useEffect } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error' | 'already';

export default function Day3Subscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [, setSubCount] = useState<number | null>(null);

  // Check URL params for confirmation result
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sub = params.get('sub');
    if (sub === 'ok') {
      setStatus('success');
      setMessage('✅ Subscription confirmed! We\'ll notify you the moment Day 3 drops.');
    } else if (sub === 'already') {
      setStatus('already');
      setMessage('✅ You\'re already subscribed to Day 3 release notifications.');
    } else if (sub === 'invalid') {
      setStatus('error');
      setMessage('That confirmation link is invalid or expired. Please try subscribing again.');
    } else if (sub === 'error') {
      setStatus('error');
      setMessage('Something went wrong during confirmation. Please try again later.');
    }
  }, []);

  // Fetch subscriber count
  useEffect(() => {
    fetch('/api/subscribe')
      .then(r => r.json() as Promise<{ count?: number }>)
      .then(d => setSubCount(d.count ?? 0))
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json() as { message?: string; error?: string };
      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'Confirmation email sent — check your inbox.');
        setEmail('');
        // Refresh count
        fetch('/api/subscribe')
          .then(r => r.json() as Promise<{ count?: number }>)
          .then(d => setSubCount(d.count ?? 0))
          .catch(() => {});
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again later.');
    }
  };

  // Already confirmed state
  if (status === 'already') {
    return (
      <div className="bg-surface-container border border-outline/20 p-6 rounded">
        <p className="text-sm text-on-surface">{message}</p>
      </div>
    );
  }

  // Confirmation success state (from email link)
  if (status === 'success' && message.includes('confirmed')) {
    return (
      <div className="bg-surface-container border border-outline/20 p-6 rounded">
        <p className="text-sm text-on-surface mb-1">{message}</p>
        <p className="text-xs text-on-surface/50">No further action needed — just wait for the news.</p>
      </div>
    );
  }

  return (
    <div className="bg-surface-container border border-outline/20 p-6 rounded">
      <h3 className="font-display text-base text-on-surface mb-2">
        🔔 Don&apos;t miss the Day 3 drop
      </h3>
      <p className="text-sm text-on-surface/70 mb-4">
        The moment Day 3 is released, we&apos;ll send you one email — no need to check back every day.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-3">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 bg-surface border border-outline/30 px-4 py-2.5 text-sm text-on-surface placeholder:text-on-surface/30 rounded focus:outline-none focus:border-primary/50"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-primary text-on-primary px-6 py-2.5 text-sm font-semibold rounded hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap"
        >
          {status === 'loading' ? 'Sending...' : 'Notify Me'}
        </button>
      </form>

      {message && (
        <p className={`text-sm mb-3 ${status === 'error' ? 'text-red-400' : 'text-green-400'}`}>
          {message}
        </p>
      )}

      <div className="text-xs text-on-surface/40">
        <span>Only used for Day 3 release notification. Unsubscribe anytime.</span>
      </div>
    </div>
  );
}

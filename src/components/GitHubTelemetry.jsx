import React, { useEffect, useState } from 'react';

const GitHubTelemetry = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const username = 'makarim22';

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/events/public`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        
        // Filter for push events and format them
        const pushEvents = data
          .filter(event => event.type === 'PushEvent')
          .slice(0, 5)
          .map(event => {
            const hasCommits = event.payload.commits && event.payload.commits.length > 0;
            return {
              id: event.id,
              repo: event.repo.name.replace(`${username}/`, ''),
              message: hasCommits ? event.payload.commits[0].message : 'SYSTEM UPDATE DEPLOYED',
              date: new Date(event.created_at),
              sha: event.payload.head ? event.payload.head.substring(0, 7) : 'REF_LOG'
            };
          });

          
        setEvents(pushEvents);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + "Y AGO";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + "M AGO";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + "D AGO";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + "H AGO";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + "M AGO";
    return "JUST NOW";
  };

  return (
    <section id="telemetry" className="py-16 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-outline-variant relative overflow-hidden">
      {/* Scanline overlay for that monitor feel */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-3 h-3 bg-primary-fixed rounded-full" />
              <div className="absolute inset-0 w-3 h-3 bg-primary-fixed rounded-full animate-ping" />
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase tracking-tighter">
              LIVE TELEMETRY <span className="text-on-surface-variant font-light">/</span> GITHUB_FEED
            </h2>
          </div>
          
          <div className="flex items-center gap-6 font-label-caps text-[10px] text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-primary-fixed rounded-full" />
              STATUS: <span className="text-primary-fixed">SYNCHRONIZED</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-primary-fixed rounded-full" />
              USER: <span className="text-primary-fixed">@{username.toUpperCase()}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1 border-l border-outline-variant pl-4 md:pl-8">
          {loading ? (
            Array(5).fill(0).map((_, i) => (
              <div key={i} className="py-4 opacity-20 animate-pulse border-b border-outline-variant/30">
                <div className="h-4 bg-on-surface-variant w-1/3 mb-2" />
                <div className="h-3 bg-on-surface-variant w-2/3" />
              </div>
            ))
          ) : error ? (
            <div className="py-12 text-center border border-dashed border-error/30 rounded">
              <p className="font-label-caps text-error">SIGNAL_INTERRUPTED: FAILED TO FETCH UPLINK</p>
            </div>
          ) : events.length === 0 ? (
            <div className="py-12 text-center border border-dashed border-outline-variant/30 rounded">
              <p className="font-label-caps text-on-surface-variant">NO RECENT ACTIVITY: ENGINE IDLE</p>
            </div>
          ) : (
            events.map((event, i) => (

              <div 
                key={event.id} 
                className="group py-6 border-b border-outline-variant/30 hover:bg-primary-fixed/5 transition-all duration-300 px-4 -ml-4 md:-ml-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
                style={{ animation: `fadeIn 0.5s ease both ${i * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="font-label-caps text-[10px] text-primary-fixed bg-primary-fixed/10 px-2 py-1 h-fit mt-1 shrink-0">
                    {event.sha}
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm uppercase group-hover:text-primary-fixed transition-colors">
                      {event.repo}
                    </h3>
                    <p className="font-body-md text-on-surface-variant line-clamp-1 group-hover:text-on-surface transition-colors italic">
                      "{event.message}"
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-right shrink-0">
                  <div className="hidden md:block h-[1px] w-12 bg-outline-variant group-hover:w-24 group-hover:bg-primary-fixed transition-all duration-500" />
                  <span className="font-label-caps text-[12px] text-on-surface-variant group-hover:text-primary-fixed tabular-nums">
                    {timeAgo(event.date)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom grid deco */}
        <div className="mt-12 flex justify-end gap-1">
          {Array(20).fill(0).map((_, i) => (
            <div 
              key={i} 
              className="w-1 h-4 bg-outline-variant transition-colors duration-500"
              style={{ 
                height: `${2 + Math.random() * 16}px`,
                backgroundColor: Math.random() > 0.8 ? '#c8f300' : undefined,
                animation: `blink ${1 + Math.random() * 2}s infinite ${Math.random()}s`
              }} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubTelemetry;

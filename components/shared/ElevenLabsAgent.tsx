'use client';

import Script from 'next/script';

export default function ElevenLabsAgent() {
  const agentId = 'agent_1501knrsnj2wedjs04mbyfbj2m70';

  return (
    <>
      <elevenlabs-convai agent-id={agentId}></elevenlabs-convai>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
        type="text/javascript"
      />
    </>
  );
}
